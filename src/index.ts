const CANONICAL_HOST = "miracleharness.com";
const GUESTBOOK_ACTION = "guestbook_submit";
const GUESTBOOK_PAGE_SIZE = 24;
const MAX_BODY_BYTES = 8_192;
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1_000;

const DUMMY_TURNSTILE_SITE_KEYS = new Set([
  "1x00000000000000000000AA",
  "2x00000000000000000000AB",
  "1x00000000000000000000BB",
  "2x00000000000000000000BB",
  "3x00000000000000000000FF",
]);

const DUMMY_TURNSTILE_SECRET_KEYS = new Set([
  "1x0000000000000000000000000000000AA",
  "2x0000000000000000000000000000000AA",
  "3x0000000000000000000000000000000AA",
]);

type RuntimeEnv = Omit<Env, "ENVIRONMENT"> & {
  readonly ENVIRONMENT?: string;
  readonly TURNSTILE_SITE_KEY?: string;
  readonly TURNSTILE_SECRET?: string;
  readonly TURNSTILE_HOSTNAMES?: string;
  readonly IP_HASH_SALT?: string;
  readonly ADMIN_API_TOKEN?: string;
};

type GuestbookMessageRow = {
  id: string;
  display_name: string;
  message: string;
  created_at: number;
};

type GuestbookInput = {
  displayName: string;
  message: string;
  turnstileToken: string;
};

type TurnstileVerification = {
  success: boolean;
  action?: string;
  hostname?: string;
  "error-codes"?: string[];
};

type ReadyTurnstileConfig = {
  siteKey: string;
  secret: string;
  expectedHostnames: Set<string>;
  officialDummyMode: boolean;
};

function jsonResponse(body: unknown, init: ResponseInit = {}): Response {
  const headers = new Headers(init.headers);
  headers.set("Content-Type", "application/json; charset=utf-8");
  headers.set("Cache-Control", "no-store");
  headers.set("X-Content-Type-Options", "nosniff");
  return Response.json(body, { ...init, headers });
}

function apiError(status: number, code: string, message: string): Response {
  return jsonResponse(
    { ok: false, error: { code, message } },
    { status },
  );
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function cleanText(value: unknown, maxLength: number): string | null {
  if (typeof value !== "string") return null;
  const cleaned = value.trim().replace(/\r\n?/g, "\n");
  if (cleaned.length < 1 || cleaned.length > maxLength) return null;
  if (/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/u.test(cleaned)) return null;
  return cleaned;
}

export function validateGuestbookInput(value: unknown): GuestbookInput | null {
  if (!isRecord(value)) return null;

  const displayName = cleanText(value.displayName, 32);
  const message = cleanText(value.message, 500);
  const turnstileToken = cleanText(value.turnstileToken, 2_048);
  if (!displayName || !message || !turnstileToken) return null;

  return { displayName, message, turnstileToken };
}

async function readBoundedJson(request: Request): Promise<unknown> {
  const contentType = request.headers.get("Content-Type")?.toLowerCase() ?? "";
  if (!contentType.startsWith("application/json")) {
    throw new ApiInputError(415, "unsupported_media_type", "请使用 JSON 提交。 / JSON required.");
  }

  const declaredLength = request.headers.get("Content-Length");
  if (declaredLength !== null) {
    const parsedLength = Number.parseInt(declaredLength, 10);
    if (!Number.isFinite(parsedLength) || parsedLength < 0 || parsedLength > MAX_BODY_BYTES) {
      throw new ApiInputError(413, "payload_too_large", "提交内容过大。 / Payload too large.");
    }
  }

  const rawBody = await request.text();
  if (new TextEncoder().encode(rawBody).byteLength > MAX_BODY_BYTES) {
    throw new ApiInputError(413, "payload_too_large", "提交内容过大。 / Payload too large.");
  }

  try {
    return JSON.parse(rawBody) as unknown;
  } catch {
    throw new ApiInputError(400, "invalid_json", "JSON 格式无效。 / Invalid JSON.");
  }
}

class ApiInputError extends Error {
  constructor(
    readonly status: number,
    readonly code: string,
    message: string,
  ) {
    super(message);
    this.name = "ApiInputError";
  }
}

function parseExpectedHostnames(rawValue: string | undefined): Set<string> {
  return new Set(
    (rawValue ?? "")
      .split(",")
      .map((hostname) => hostname.trim().toLowerCase())
      .filter((hostname) => hostname.length > 0),
  );
}

function isProduction(env: RuntimeEnv): boolean {
  return (env.ENVIRONMENT ?? "production").trim().toLowerCase() === "production";
}

function getTurnstileConfig(env: RuntimeEnv): ReadyTurnstileConfig | null {
  const siteKey = env.TURNSTILE_SITE_KEY?.trim() ?? "";
  const secret = env.TURNSTILE_SECRET?.trim() ?? "";
  const expectedHostnames = parseExpectedHostnames(env.TURNSTILE_HOSTNAMES);

  if (!siteKey || !secret || expectedHostnames.size === 0) return null;

  const dummySiteKey = DUMMY_TURNSTILE_SITE_KEYS.has(siteKey);
  const dummySecret = DUMMY_TURNSTILE_SECRET_KEYS.has(secret);

  if (
    isProduction(env)
    && (dummySiteKey || dummySecret)
  ) {
    return null;
  }

  if (!isProduction(env) && dummySiteKey !== dummySecret) return null;

  if (
    isProduction(env)
    && (expectedHostnames.has("localhost") || expectedHostnames.has("127.0.0.1"))
  ) {
    return null;
  }

  return {
    siteKey,
    secret,
    expectedHostnames,
    officialDummyMode: !isProduction(env) && dummySiteKey && dummySecret,
  };
}

function publicTurnstileConfig(env: RuntimeEnv): Response {
  const config = getTurnstileConfig(env);
  if (!config) {
    return jsonResponse({
      ok: true,
      guestbook: {
        enabled: false,
        reason: "turnstile_not_configured",
      },
    });
  }

  return jsonResponse({
    ok: true,
    guestbook: {
      enabled: true,
      turnstileSiteKey: config.siteKey,
      turnstileAction: GUESTBOOK_ACTION,
    },
  });
}

function getClientIp(request: Request, env: RuntimeEnv): string | null {
  const clientIp = request.headers.get("CF-Connecting-IP")?.trim() ?? "";
  if (clientIp.length > 0 && clientIp.length <= 64) return clientIp;
  return isProduction(env) ? null : "127.0.0.1";
}

export async function saltedIpHash(ip: string, salt: string): Promise<string> {
  const digest = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(`${salt}:${ip}`),
  );
  return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
}

async function verifyTurnstile(
  token: string,
  clientIp: string,
  config: ReadyTurnstileConfig,
): Promise<boolean> {
  let response: Response;
  try {
    response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: config.secret,
        response: token,
        remoteip: clientIp,
      }),
      signal: AbortSignal.timeout(10_000),
    });
  } catch {
    return false;
  }

  if (!response.ok) return false;

  let result: unknown;
  try {
    result = await response.json();
  } catch {
    return false;
  }

  if (!isRecord(result)) return false;
  const verification: TurnstileVerification = {
    success: result.success === true,
    action: typeof result.action === "string" ? result.action : undefined,
    hostname: typeof result.hostname === "string" ? result.hostname.toLowerCase() : undefined,
    "error-codes": Array.isArray(result["error-codes"])
      ? result["error-codes"].filter((code): code is string => typeof code === "string")
      : undefined,
  };

  if (!verification.success) return false;

  // Published dummy tokens do not carry a real widget action/hostname. This
  // branch is unreachable in production because dummy keys are rejected above.
  if (config.officialDummyMode) return true;

  return Boolean(
    verification.action === GUESTBOOK_ACTION
    && verification.hostname
    && config.expectedHostnames.has(verification.hostname),
  );
}

async function consumeRateLimit(env: RuntimeEnv, ipHash: string, now: number): Promise<boolean> {
  const windowStart = Math.floor(now / RATE_LIMIT_WINDOW_MS) * RATE_LIMIT_WINDOW_MS;
  const result = await env.DB.prepare(`
    INSERT INTO guestbook_rate_limits (ip_hash, window_start, message_count)
    VALUES (?1, ?2, 1)
    ON CONFLICT (ip_hash, window_start) DO UPDATE
      SET message_count = message_count + 1
      WHERE message_count < ?3
    RETURNING message_count
  `)
    .bind(ipHash, windowStart, RATE_LIMIT_MAX)
    .first<{ message_count: number }>();

  return result !== null;
}

async function cleanupOldRateLimits(env: RuntimeEnv, now: number): Promise<void> {
  const cutoff = now - (2 * RATE_LIMIT_WINDOW_MS);
  await env.DB.prepare("DELETE FROM guestbook_rate_limits WHERE window_start < ?1")
    .bind(cutoff)
    .run();
}

async function listGuestbookMessages(env: RuntimeEnv): Promise<Response> {
  const result = await env.DB.prepare(`
    SELECT id, display_name, message, created_at
    FROM guestbook_messages
    WHERE status = 'visible'
    ORDER BY created_at DESC, id DESC
    LIMIT ?1
  `)
    .bind(GUESTBOOK_PAGE_SIZE)
    .all<GuestbookMessageRow>();

  return jsonResponse({
    ok: true,
    items: result.results.map((row) => ({
      id: row.id,
      displayName: row.display_name,
      message: row.message,
      createdAt: new Date(row.created_at).toISOString(),
    })),
  });
}

function isSameOrigin(request: Request): boolean {
  const origin = request.headers.get("Origin");
  if (!origin) return true;

  try {
    return new URL(origin).origin === new URL(request.url).origin;
  } catch {
    return false;
  }
}

async function createGuestbookMessage(
  request: Request,
  env: RuntimeEnv,
  ctx: ExecutionContext,
): Promise<Response> {
  if (!isSameOrigin(request)) {
    return apiError(403, "cross_origin_forbidden", "请求来源无效。 / Invalid request origin.");
  }

  const body = await readBoundedJson(request);
  const input = validateGuestbookInput(body);
  if (!input) {
    return apiError(
      400,
      "invalid_fields",
      "昵称需 1–32 字，留言需 1–500 字。 / Check field lengths.",
    );
  }

  const turnstileConfig = getTurnstileConfig(env);
  const clientIp = getClientIp(request, env);
  const ipHashSalt = env.IP_HASH_SALT?.trim() ?? "";
  if (!turnstileConfig || !clientIp || ipHashSalt.length < 32) {
    return apiError(503, "guestbook_unavailable", "留言板尚未完成安全配置。 / Guestbook unavailable.");
  }

  const verified = await verifyTurnstile(input.turnstileToken, clientIp, turnstileConfig);
  if (!verified) {
    return apiError(403, "turnstile_failed", "人机验证失败，请重试。 / Verification failed.");
  }

  const now = Date.now();
  const ipHash = await saltedIpHash(clientIp, ipHashSalt);
  const permitted = await consumeRateLimit(env, ipHash, now);
  if (!permitted) {
    return apiError(429, "rate_limited", "每小时最多留言 3 次。 / Three messages per hour.");
  }

  const id = crypto.randomUUID();
  await env.DB.prepare(`
    INSERT INTO guestbook_messages (id, display_name, message, status, created_at)
    VALUES (?1, ?2, ?3, 'visible', ?4)
  `)
    .bind(id, input.displayName, input.message, now)
    .run();

  ctx.waitUntil(
    cleanupOldRateLimits(env, now).catch((error: unknown) => {
      console.error(JSON.stringify({
        event: "guestbook_rate_limit_cleanup_failed",
        error: error instanceof Error ? error.message : "unknown",
      }));
    }),
  );

  return jsonResponse(
    {
      ok: true,
      item: {
        id,
        displayName: input.displayName,
        message: input.message,
        createdAt: new Date(now).toISOString(),
      },
    },
    { status: 201 },
  );
}

async function timingSafeTextEqual(provided: string, expected: string): Promise<boolean> {
  const encoder = new TextEncoder();
  const [providedHash, expectedHash] = await Promise.all([
    crypto.subtle.digest("SHA-256", encoder.encode(provided)),
    crypto.subtle.digest("SHA-256", encoder.encode(expected)),
  ]);
  return crypto.subtle.timingSafeEqual(providedHash, expectedHash);
}

async function isAdminAuthorized(request: Request, env: RuntimeEnv): Promise<boolean> {
  const expectedToken = env.ADMIN_API_TOKEN?.trim() ?? "";
  const authorization = request.headers.get("Authorization") ?? "";
  if (
    expectedToken.length < 32
    || expectedToken.length > 512
    || authorization.length > 512
    || !authorization.startsWith("Bearer ")
  ) {
    return false;
  }

  const providedToken = authorization.slice("Bearer ".length);
  return timingSafeTextEqual(providedToken, expectedToken);
}

async function updateMessageVisibility(
  request: Request,
  env: RuntimeEnv,
  messageId: string,
): Promise<Response> {
  if (!await isAdminAuthorized(request, env)) {
    return apiError(404, "not_found", "Not found.");
  }

  const body = await readBoundedJson(request);
  if (!isRecord(body) || typeof body.hidden !== "boolean") {
    return apiError(400, "invalid_fields", "Expected { hidden: boolean }.");
  }

  const status = body.hidden ? "hidden" : "visible";
  const result = await env.DB.prepare("UPDATE guestbook_messages SET status = ?1 WHERE id = ?2")
    .bind(status, messageId)
    .run();
  if (result.meta.changes === 0) return apiError(404, "not_found", "Not found.");

  return jsonResponse({ ok: true, id: messageId, hidden: body.hidden });
}

async function deleteMessage(
  request: Request,
  env: RuntimeEnv,
  messageId: string,
): Promise<Response> {
  if (!await isAdminAuthorized(request, env)) {
    return apiError(404, "not_found", "Not found.");
  }

  const result = await env.DB.prepare("DELETE FROM guestbook_messages WHERE id = ?1")
    .bind(messageId)
    .run();
  if (result.meta.changes === 0) return apiError(404, "not_found", "Not found.");

  return jsonResponse({ ok: true, id: messageId, deleted: true });
}

async function handleApi(
  request: Request,
  env: RuntimeEnv,
  ctx: ExecutionContext,
): Promise<Response> {
  const url = new URL(request.url);

  if (url.pathname === "/api/health" && request.method === "GET") {
    return jsonResponse({ ok: true, service: "miracle-harness-site" });
  }

  if (url.pathname === "/api/config" && request.method === "GET") {
    return publicTurnstileConfig(env);
  }

  if (url.pathname === "/api/guestbook") {
    if (request.method === "GET") return listGuestbookMessages(env);
    if (request.method === "POST") return createGuestbookMessage(request, env, ctx);
    return apiError(405, "method_not_allowed", "Method not allowed.");
  }

  const adminMatch = /^\/api\/admin\/messages\/([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})$/u.exec(url.pathname);
  if (adminMatch?.[1]) {
    if (request.method === "PATCH") return updateMessageVisibility(request, env, adminMatch[1]);
    if (request.method === "DELETE") return deleteMessage(request, env, adminMatch[1]);
    return apiError(405, "method_not_allowed", "Method not allowed.");
  }

  return apiError(404, "not_found", "Not found.");
}

function withStaticSecurityHeaders(response: Response): Response {
  const headers = new Headers(response.headers);
  headers.set(
    "Content-Security-Policy",
    "default-src 'self'; base-uri 'self'; connect-src 'self' https://challenges.cloudflare.com; font-src 'self'; form-action 'self'; frame-ancestors 'none'; frame-src https://challenges.cloudflare.com; img-src 'self' data:; object-src 'none'; script-src 'self' https://challenges.cloudflare.com; style-src 'self'; upgrade-insecure-requests",
  );
  headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=(), payment=(), usb=()");
  headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains");
  headers.set("X-Content-Type-Options", "nosniff");
  headers.set("X-Frame-Options", "DENY");

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

function canonicalRedirect(request: Request): Response | null {
  const url = new URL(request.url);
  if (url.hostname.toLowerCase() !== `www.${CANONICAL_HOST}`) return null;
  url.hostname = CANONICAL_HOST;
  url.protocol = "https:";
  url.port = "";
  return Response.redirect(url.toString(), 308);
}

export default {
  async fetch(request: Request, env: RuntimeEnv, ctx: ExecutionContext): Promise<Response> {
    const redirect = canonicalRedirect(request);
    if (redirect) return redirect;

    const url = new URL(request.url);
    const requestId = crypto.randomUUID();

    try {
      if (url.pathname.startsWith("/api/")) {
        const response = await handleApi(request, env, ctx);
        response.headers.set("X-Request-ID", requestId);
        return response;
      }

      const assetResponse = await env.ASSETS.fetch(request);
      return withStaticSecurityHeaders(assetResponse);
    } catch (error: unknown) {
      if (error instanceof ApiInputError) {
        const response = apiError(error.status, error.code, error.message);
        response.headers.set("X-Request-ID", requestId);
        return response;
      }

      console.error(JSON.stringify({
        event: "request_failed",
        requestId,
        method: request.method,
        path: url.pathname,
        error: error instanceof Error ? error.message : "unknown",
      }));
      const response = apiError(500, "internal_error", "服务暂时不可用。 / Service unavailable.");
      response.headers.set("X-Request-ID", requestId);
      return response;
    }
  },
} satisfies ExportedHandler<RuntimeEnv>;
