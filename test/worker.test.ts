import { applyD1Migrations, createExecutionContext, waitOnExecutionContext } from "cloudflare:test";
import { env } from "cloudflare:workers";
import { HttpResponse, http } from "msw";
import { beforeAll, beforeEach, describe, expect, it } from "vitest";
import worker from "../src/index";
import { network } from "./network";

const IncomingRequest = Request;
const SITEVERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
const ADMIN_TOKEN = "test-admin-api-token-with-at-least-32-characters";

type ApiPayload = {
  ok: boolean;
  item?: {
    id: string;
    displayName: string;
    message: string;
    createdAt: string;
  };
  items?: Array<{
    id: string;
    displayName: string;
    message: string;
    createdAt: string;
  }>;
  error?: { code: string; message: string };
  guestbook?: {
    enabled: boolean;
    reason?: string;
  };
};

function turnstilePassHandler() {
  return http.post(SITEVERIFY_URL, async ({ request }) => {
    const body = await request.formData();
    expect(body.get("response")).toBe("XXXX.DUMMY.TOKEN.XXXX");
    return HttpResponse.json({
      success: true,
      action: null,
      hostname: "example.com",
      "error-codes": [],
    });
  });
}

async function callWorker(request: Request): Promise<Response> {
  return callWorkerWithEnv(request, env);
}

async function callWorkerWithEnv(
  request: Request,
  runtimeEnv: Cloudflare.Env,
): Promise<Response> {
  const ctx = createExecutionContext();
  const response = await worker.fetch(request, runtimeEnv, ctx);
  await waitOnExecutionContext(ctx);
  return response;
}

function guestbookPost(
  displayName: string,
  message: string,
  ip = "203.0.113.42",
): Request {
  return new IncomingRequest("https://miracleharness.com/api/guestbook", {
    method: "POST",
    headers: {
      "CF-Connecting-IP": ip,
      "Content-Type": "application/json",
      Origin: "https://miracleharness.com",
    },
    body: JSON.stringify({
      displayName,
      message,
      turnstileToken: "XXXX.DUMMY.TOKEN.XXXX",
    }),
  });
}

beforeAll(async () => {
  await applyD1Migrations(env.DB, env.TEST_MIGRATIONS);
});

beforeEach(async () => {
  await env.DB.batch([
    env.DB.prepare("DELETE FROM guestbook_messages"),
    env.DB.prepare("DELETE FROM guestbook_rate_limits"),
  ]);
  network.use(turnstilePassHandler());
});

describe("guestbook API", () => {
  it("creates and lists a message without interpreting markup", async () => {
    const message = "你好，<img src=x onerror=alert(1)> 也只能作为文字。";
    const created = await callWorker(guestbookPost("冬青", message));
    expect(created.status).toBe(201);

    const createdPayload = await created.json<ApiPayload>();
    expect(createdPayload.item?.message).toBe(message);

    const listed = await callWorker(
      new IncomingRequest("https://miracleharness.com/api/guestbook"),
    );
    expect(listed.status).toBe(200);
    const listedPayload = await listed.json<ApiPayload>();
    expect(listedPayload.items).toHaveLength(1);
    expect(listedPayload.items?.[0]?.displayName).toBe("冬青");
    expect(listedPayload.items?.[0]?.message).toBe(message);
  });

  it("rejects invalid fields before persistence", async () => {
    const response = await callWorker(guestbookPost("", "hello"));
    expect(response.status).toBe(400);
    const payload = await response.json<ApiPayload>();
    expect(payload.error?.code).toBe("invalid_fields");
  });

  it("fails closed when Turnstile validation fails", async () => {
    network.use(
      http.post(SITEVERIFY_URL, () => HttpResponse.json({
        success: false,
        "error-codes": ["invalid-input-response"],
      })),
    );

    const response = await callWorker(guestbookPost("访客", "这条不会被保存"));
    expect(response.status).toBe(403);
    const payload = await response.json<ApiPayload>();
    expect(payload.error?.code).toBe("turnstile_failed");
  });

  it.each([
    { action: "wrong_action", hostname: "miracleharness.com" },
    { action: "guestbook_submit", hostname: "attacker.example" },
  ])("rejects a successful token with mismatched action or hostname", async (verification) => {
    const strictEnv: Cloudflare.Env = {
      ...env,
      TURNSTILE_SITE_KEY: "test-production-shaped-site-key",
      TURNSTILE_SECRET: "test-production-shaped-secret-key",
    };
    network.use(
      http.post(SITEVERIFY_URL, () => HttpResponse.json({
        success: true,
        action: verification.action,
        hostname: verification.hostname,
        "error-codes": [],
      })),
    );

    const response = await callWorkerWithEnv(
      guestbookPost("访客", "这条也不会被保存"),
      strictEnv,
    );
    expect(response.status).toBe(403);
    const payload = await response.json<ApiPayload>();
    expect(payload.error?.code).toBe("turnstile_failed");
  });

  it("limits one salted IP hash to three messages per hour", async () => {
    const statuses: number[] = [];
    for (let index = 0; index < 4; index += 1) {
      const response = await callWorker(guestbookPost("访客", `第 ${index + 1} 条`));
      statuses.push(response.status);
    }

    expect(statuses).toEqual([201, 201, 201, 429]);
    const row = await env.DB.prepare(
      "SELECT ip_hash, message_count FROM guestbook_rate_limits LIMIT 1",
    ).first<{ ip_hash: string; message_count: number }>();
    expect(row?.ip_hash).toMatch(/^[0-9a-f]{64}$/u);
    expect(row?.ip_hash).not.toContain("203.0.113.42");
    expect(row?.message_count).toBe(3);
  });

  it("lets an authenticated administrator hide and delete a message", async () => {
    const created = await callWorker(guestbookPost("园丁", "等待管理员整理"));
    const createdPayload = await created.json<ApiPayload>();
    const messageId = createdPayload.item?.id;
    expect(messageId).toBeTruthy();
    if (!messageId) throw new Error("Missing message id");

    const hidden = await callWorker(new IncomingRequest(
      `https://miracleharness.com/api/admin/messages/${messageId}`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${ADMIN_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ hidden: true }),
      },
    ));
    expect(hidden.status).toBe(200);

    const listed = await callWorker(
      new IncomingRequest("https://miracleharness.com/api/guestbook"),
    );
    const listedPayload = await listed.json<ApiPayload>();
    expect(listedPayload.items).toHaveLength(0);

    const deleted = await callWorker(new IncomingRequest(
      `https://miracleharness.com/api/admin/messages/${messageId}`,
      {
        method: "DELETE",
        headers: { Authorization: `Bearer ${ADMIN_TOKEN}` },
      },
    ));
    expect(deleted.status).toBe(200);
  });

  it("conceals administrator routes from unauthenticated callers", async () => {
    const response = await callWorker(new IncomingRequest(
      "https://miracleharness.com/api/admin/messages/00000000-0000-4000-8000-000000000000",
      { method: "DELETE" },
    ));
    expect(response.status).toBe(404);
  });
});

describe("domain behavior", () => {
  it("refuses Cloudflare dummy keys when the runtime is production", async () => {
    const productionEnv: Cloudflare.Env = { ...env, ENVIRONMENT: "production" };
    const response = await callWorkerWithEnv(
      new IncomingRequest("https://miracleharness.com/api/config"),
      productionEnv,
    );
    const payload = await response.json<ApiPayload>();
    expect(payload.guestbook).toEqual({
      enabled: false,
      reason: "turnstile_not_configured",
    });
  });

  it("redirects www to the canonical apex domain", async () => {
    const response = await callWorker(
      new IncomingRequest("https://www.miracleharness.com/path?q=1"),
    );
    expect(response.status).toBe(308);
    expect(response.headers.get("Location")).toBe("https://miracleharness.com/path?q=1");
  });

  it.each([
    ["/modules", "https://miracleharness.com/v1/"],
    ["/modules/", "https://miracleharness.com/v1/"],
    ["/modules/blueprint/", "https://miracleharness.com/v1/modules/blueprint/"],
    ["/modules/x?ref=old", "https://miracleharness.com/v1/modules/x"],
  ])("permanently redirects the first website's module page %s into the /v1/ archive", async (path, location) => {
    const response = await callWorker(
      new IncomingRequest(`https://miracleharness.com${path}`),
    );
    expect(response.status).toBe(301);
    expect(response.headers.get("Location")).toBe(location);
  });

  it("wraps every static asset response in the security headers", async () => {
    const response = await callWorkerWithEnv(
      new IncomingRequest("https://miracleharness.com/"),
      { ...env, ASSETS: { fetch: async () => new Response("ok") } } as unknown as Cloudflare.Env,
    );
    expect(response.status).toBe(200);
    expect(response.headers.get("Content-Security-Policy")).toBe(
      "default-src 'self'; base-uri 'self'; connect-src 'self' https://challenges.cloudflare.com; font-src 'self'; form-action 'self'; frame-ancestors 'none'; frame-src https://challenges.cloudflare.com; img-src 'self' data:; media-src 'self'; object-src 'none'; script-src 'self' https://challenges.cloudflare.com; style-src 'self'; upgrade-insecure-requests",
    );
    expect(response.headers.get("Strict-Transport-Security")).toBe("max-age=31536000; includeSubDomains");
    expect(response.headers.get("X-Frame-Options")).toBe("DENY");
    expect(response.headers.get("X-Content-Type-Options")).toBe("nosniff");
    expect(response.headers.get("Referrer-Policy")).toBe("strict-origin-when-cross-origin");
    expect(response.headers.get("Permissions-Policy")).toBe(
      "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
    );
  });

  it("does not treat lookalike paths or the API as retired module pages", async () => {
    const lookalike = await callWorker(
      new IncomingRequest("https://miracleharness.com/modules-archive"),
    );
    expect(lookalike.status).not.toBe(301);

    const health = await callWorker(
      new IncomingRequest("https://miracleharness.com/api/health"),
    );
    expect(health.status).toBe(200);
  });
});
