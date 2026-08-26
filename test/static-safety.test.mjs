import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";
import "./module-pages.test.mjs";

const root = new URL("../", import.meta.url);

test("the public site contains the fixed source and Windows alpha download links", async () => {
  const html = await readFile(new URL("index.html", root), "utf8");
  assert.match(html, /https:\/\/github\.com\/tmdysx\/miracle-harness/u);
  assert.match(
    html,
    /https:\/\/github\.com\/tmdysx\/miracle-harness\/blob\/main\/MIRACLE_HARNESS_VISION\.md/u,
  );
  assert.match(
    html,
    /https:\/\/github\.com\/tmdysx\/miracle-harness\/releases\/latest\/download\/Miracle-Harness-v0\.1\.0-alpha\.1-win-x64\.zip/u,
  );
  assert.match(html, /Alpha/u);
  assert.match(html, /Windows x64/u);
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
    html.matchAll(/data-i18n(?:-alt|-placeholder)?="([^"]+)"/gu),
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
    /const publicAllowlist = \["index\.html", "styles\.css", "app\.js", "assets", "modules"\]/u,
  );
  assert.match(
    buildScript,
    /const copiedEntries = \["index\.html", "styles\.css", "app\.js", "assets"\]/u,
  );
  assert.doesNotMatch(buildScript, /cp\(projectRoot,\s*distDir/u);
});
