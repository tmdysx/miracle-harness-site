import assert from "node:assert/strict";
import { readdir, readFile, stat } from "node:fs/promises";
import { test } from "node:test";

const root = new URL("../", import.meta.url);
const REPO_URL = "https://github.com/tmdysx/agent-research-workbench";
const RELEASE_ZIP_URL =
  "https://github.com/tmdysx/agent-research-workbench/releases/latest/download/MiracleHarness2.zip";
const LICENSE_EMAIL = "3129746403@qq.com";

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/gu, "\\$&");
}

test("the public site links the research workbench repository and Windows release ZIP", async () => {
  const html = await readFile(new URL("index.html", root), "utf8");
  assert.match(html, new RegExp(`href="${escapeRegExp(REPO_URL)}"`, "u"));
  assert.match(html, new RegExp(`href="${escapeRegExp(RELEASE_ZIP_URL)}"`, "u"));
  assert.match(html, /Agent 科研自动工作台/u);
  assert.match(html, /MiracleHarness/u);
  assert.match(html, /Windows/u);
});

test("the page states the noncommercial license and commercial-licensing contact", async () => {
  const html = await readFile(new URL("index.html", root), "utf8");
  assert.match(html, /PolyForm Noncommercial 1\.0\.0/u);
  assert.match(html, new RegExp(`href="mailto:${escapeRegExp(LICENSE_EMAIL)}"`, "u"));
  assert.match(html, /不是 OSI/u);
});

test("the page and the English copy never call this project open source", async () => {
  const [html, script] = await Promise.all([
    readFile(new URL("index.html", root), "utf8"),
    readFile(new URL("app.js", root), "utf8"),
  ]);
  assert.match(script, /not an OSI-approved open-source license/u);
  const openSourceMention = /开源|open[\s-]?source/iu;
  // Only negated statements such as "不是 OSI 认可的开源许可证" or
  // "not an OSI-approved open-source license" may mention open source.
  const negation = /不是|并非|不属于|\bnot\b|\bisn't\b/iu;
  for (const [name, source] of [["index.html", html], ["app.js", script]]) {
    assert.doesNotMatch(
      source,
      /开源项目|开源软件|完全开源|是开源的|(?:is|are|fully|an?) open[\s-]?source|open[\s-]?source (?:project|software|tool|app)/iu,
      `${name} must not call the project open source`,
    );
    const sentences = source.split(/[。！？!?\n]|\.(?:\s|"|$)/u);
    for (const sentence of sentences) {
      if (openSourceMention.test(sentence)) {
        assert.match(sentence, negation, `${name}: open-source mention must be negated: ${sentence.trim()}`);
      }
    }
  }
});

test("the Worker keeps the exact static security headers", async () => {
  const worker = await readFile(new URL("src/index.ts", root), "utf8");
  const expectedCsp =
    "default-src 'self'; base-uri 'self'; connect-src 'self' https://challenges.cloudflare.com; font-src 'self'; form-action 'self'; frame-ancestors 'none'; frame-src https://challenges.cloudflare.com; img-src 'self' data:; media-src 'self'; object-src 'none'; script-src 'self' https://challenges.cloudflare.com; style-src 'self'; upgrade-insecure-requests";
  const cspValues = Array.from(
    worker.matchAll(/headers\.set\(\s*"Content-Security-Policy",\s*"([^"]*)"/gu),
    (match) => match[1],
  );
  assert.deepEqual(cspValues, [expectedCsp]);
  assert.match(worker, /headers\.set\("Strict-Transport-Security", "max-age=[1-9]\d*[^"]*"\)/u);
  assert.match(worker, /headers\.set\("X-Frame-Options", "DENY"\)/u);
  assert.match(worker, /headers\.set\("X-Content-Type-Options", "nosniff"\)/u);
});

test("the retired desktop prototype is no longer linked or embedded", async () => {
  const [html, script] = await Promise.all([
    readFile(new URL("index.html", root), "utf8"),
    readFile(new URL("app.js", root), "utf8"),
  ]);
  for (const source of [html, script]) {
    assert.doesNotMatch(source, /github\.com\/tmdysx\/miracle-harness(?![-\w])/u);
    assert.doesNotMatch(source, /Miracle-Harness-v0\.1\.0/u);
    assert.doesNotMatch(source, /href="\/modules\//u);
    assert.doesNotMatch(source, /<video\b/u);
  }
});

test("every local image and icon referenced by the page exists in assets/", async () => {
  const html = await readFile(new URL("index.html", root), "utf8");
  const references = Array.from(
    html.matchAll(/(?:src|href)="(assets\/[^"]+)"/gu),
    (match) => match[1],
  );
  assert.ok(references.length > 0);
  for (const reference of references) {
    const info = await stat(new URL(reference, root));
    assert.ok(info.isFile(), `${reference} should be a file`);
    assert.ok(info.size > 0 && info.size < 1024 * 1024, `${reference} should stay small`);
  }

  const images = Array.from(html.matchAll(/<img\b[^>]*>/gu), (match) => match[0]);
  for (const image of images) {
    assert.match(image, /\salt="[^"]+"/u, `missing alt: ${image}`);
    assert.match(image, /\swidth="\d+"/u, `missing width: ${image}`);
    assert.match(image, /\sheight="\d+"/u, `missing height: ${image}`);
  }
});

test("AI concept illustrations live under assets/concepts/, not a screenshots folder", async () => {
  const [html, script] = await Promise.all([
    readFile(new URL("index.html", root), "utf8"),
    readFile(new URL("app.js", root), "utf8"),
  ]);
  const conceptImages = Array.from(
    html.matchAll(/<img\b(?=[^>]*\salt="AI 生成的概念插画)[^>]*\ssrc="([^"]+)"/gu),
    (match) => match[1],
  );
  assert.ok(conceptImages.length > 0);
  for (const image of conceptImages) {
    assert.match(image, /^assets\/concepts\//u, `${image} should live under assets/concepts/`);
  }
  for (const source of [html, script]) {
    assert.doesNotMatch(source, /assets\/screens\//u);
  }
  await assert.rejects(stat(new URL("assets/screens/", root)), { code: "ENOENT" });
});

test("guestbook rendering avoids HTML injection sinks", async () => {
  const script = await readFile(new URL("app.js", root), "utf8");
  assert.doesNotMatch(script, /\.innerHTML\b|\.outerHTML\b|insertAdjacentHTML|document\.write/u);
  assert.match(script, /\.textContent\s*=/u);
});

test("Chinese and English dictionaries cover every page key", async () => {
  const [html, script] = await Promise.all([
    readFile(new URL("index.html", root), "utf8"),
    readFile(new URL("app.js", root), "utf8"),
  ]);
  const dictionaryEnd = script.indexOf("\n\n(function ()");
  assert.ok(dictionaryEnd > 0, "I18N dictionary boundary should exist");
  const dictionarySource = script.slice(0, dictionaryEnd);
  const dictionary = Function(`${dictionarySource}\nreturn I18N;`)();
  const zhKeys = Object.keys(dictionary.zh).sort();
  const enKeys = Object.keys(dictionary.en).sort();
  assert.deepEqual(zhKeys, enKeys);

  const pageKeys = Array.from(
    html.matchAll(/data-i18n(?:-alt|-placeholder|-aria)?="([^"]+)"/gu),
    (match) => match[1],
  );
  for (const key of pageKeys) {
    assert.ok(dictionary.zh[key] !== undefined, `missing zh key: ${key}`);
    assert.ok(dictionary.en[key] !== undefined, `missing en key: ${key}`);
  }
});

test("HTML ids are unique", async () => {
  const html = await readFile(new URL("index.html", root), "utf8");
  const ids = Array.from(html.matchAll(/\sid="([^"]+)"/gu), (match) => match[1]);
  assert.equal(new Set(ids).size, ids.length);
});

test("the D1 schema stores only a salted IP hash for rate limiting", async () => {
  const migration = await readFile(new URL("migrations/0001_guestbook.sql", root), "utf8");
  assert.match(migration, /ip_hash TEXT NOT NULL/u);
  assert.doesNotMatch(migration, /raw_ip|client_ip|ip_address/u);
  assert.doesNotMatch(migration, /guestbook_messages[\s\S]*ip_hash[\s\S]*CREATE INDEX guestbook_messages_public_feed/u);
});

test("the build has an explicit public allowlist", async () => {
  const buildScript = await readFile(new URL("scripts/build.mjs", root), "utf8");
  assert.match(
    buildScript,
    /const publicAllowlist = \["index\.html", "styles\.css", "app\.js", "assets"\]/u,
  );
  assert.match(
    buildScript,
    /const copiedEntries = \["index\.html", "styles\.css", "app\.js", "assets"\]/u,
  );
  assert.match(buildScript, /Unexpected static build output/u);
  assert.doesNotMatch(buildScript, /cp\(projectRoot,\s*distDir/u);
});

test("the static asset tree contains only web media", async () => {
  const allowed = /\.(?:png|jpe?g|webp|svg)$/u;
  async function walk(directory) {
    const entries = await readdir(directory, { withFileTypes: true });
    for (const entry of entries) {
      const child = new URL(`${entry.name}${entry.isDirectory() ? "/" : ""}`, directory);
      if (entry.isDirectory()) {
        await walk(child);
      } else {
        assert.match(entry.name, allowed, `unexpected asset: ${child.pathname}`);
      }
    }
  }
  await walk(new URL("assets/", root));
});
