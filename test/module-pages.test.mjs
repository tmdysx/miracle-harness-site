import assert from "node:assert/strict";
import { execFile } from "node:child_process";
import { readdir, readFile } from "node:fs/promises";
import { promisify } from "node:util";
import { test } from "node:test";
import {
  moduleCatalog,
  renderModulePage,
  validateModuleCatalog,
} from "../scripts/module-catalog.mjs";

const execFileAsync = promisify(execFile);
const projectRoot = new URL("../", import.meta.url);
const distModules = new URL("../dist/modules/", import.meta.url);
const requiredIds = [
  "MH.COMMAND",
  "MH.LAW",
  "MH.CAPSULE",
  "MH.EDEN",
  "MH.TREE",
  "MH.PYRAMID",
  "MH.ROOT",
  "MH.WELL",
  "MH.ACADEMY",
  "MH.EXPERIMENTS",
  "MH.ANGELS",
  "MH.ARMORY",
  "MH.OBSERVATORY",
];
const requiredHeadings = [
  "职责",
  "明确不负责",
  "输入",
  "输出",
  "核心对象",
  "层级与 LOD",
  "四季行为",
  "上下游关系",
  "当前状态",
  "下一阶段与验收",
];

let buildPromise;
function buildSite() {
  buildPromise ??= execFileAsync(process.execPath, ["scripts/build.mjs"], {
    cwd: projectRoot,
  });
  return buildPromise;
}

async function readModulePage(slug) {
  await buildSite();
  return readFile(new URL(`${slug}/index.html`, distModules), "utf8");
}

test("the catalog defines the thirteen approved S1 modules in product order", () => {
  assert.equal(validateModuleCatalog(), true);
  assert.deepEqual(
    moduleCatalog.map((module) => module.id),
    requiredIds,
  );
  assert.equal(new Set(moduleCatalog.map((module) => module.slug)).size, 13);
});

test("the build emits exactly thirteen clean module directories", async () => {
  await buildSite();
  const emittedSlugs = (await readdir(distModules)).sort();
  const catalogSlugs = moduleCatalog.map((module) => module.slug).sort();
  assert.deepEqual(emittedSlugs, catalogSlugs);
  for (const slug of emittedSlugs) {
    assert.match(slug, /^[a-z][a-z0-9-]*$/u);
    assert.deepEqual(await readdir(new URL(`${slug}/`, distModules)), ["index.html"]);
  }
});

test("every module page has the full contract, honest phases and brand assets", async () => {
  for (const module of moduleCatalog) {
    const html = await readModulePage(module.slug);
    assert.match(html, new RegExp(`<title>${module.name}`, "u"));
    for (const heading of requiredHeadings) {
      assert.match(html, new RegExp(`>${heading}<`, "u"), `${module.id} lacks ${heading}`);
    }
    assert.match(html, />v0\.1 事实</u);
    assert.match(html, />候选蓝图</u);
    assert.match(html, />长期愿景</u);
    assert.match(html, new RegExp(`/${module.illustration.replaceAll("/", "\\/")}`, "u"));
    assert.match(html, /\/assets\/brand\/miracle-bird-mark-v1\.png/u);
    assert.match(html, /href="\/"/u);
    assert.match(
      html,
      /https:\/\/github\.com\/tmdysx\/miracle-harness\/blob\/main\/MIRACLE_HARNESS_VISION\.md/u,
    );
    assert.match(
      html,
      /https:\/\/github\.com\/tmdysx\/miracle-harness\/releases\/latest\/download\/Miracle-Harness-v0\.1\.0-alpha\.1-win-x64\.zip/u,
    );
  }
});

test("module navigation uses clean URLs and links every page to every module", async () => {
  for (const module of moduleCatalog) {
    const html = await readModulePage(module.slug);
    assert.doesNotMatch(html, /href="[^"]*index\.html/u);
    for (const destination of moduleCatalog) {
      assert.match(
        html,
        new RegExp(`href="/modules/${destination.slug}/"`, "u"),
        `${module.slug} does not link to ${destination.slug}`,
      );
    }
  }
});

test("module rendering escapes dynamic text and emits no executable markup", () => {
  const attack = `<script>alert("module")</script><img src=x onerror=alert(1)>`;
  const unsafeModule = {
    ...moduleCatalog[0],
    name: attack,
    lede: attack,
    responsibility: [attack],
    coreObjects: [attack],
    nextStage: attack,
    status: { ...moduleCatalog[0].status, current: attack },
  };
  const html = renderModulePage(unsafeModule);
  assert.doesNotMatch(html, /<script\b|<img src=x/u);
  assert.match(html, /&lt;script&gt;alert\(&quot;module&quot;\)&lt;\/script&gt;/u);
  assert.match(html, /&lt;img src=x onerror=alert\(1\)&gt;/u);
});

test("generated module pages contain no secret material or client scripts", async () => {
  for (const module of moduleCatalog) {
    const html = await readModulePage(module.slug);
    assert.doesNotMatch(
      html,
      /<script\b|ADMIN_API_TOKEN|IP_HASH_SALT|TURNSTILE_SECRET|-----BEGIN [A-Z ]+PRIVATE KEY-----/u,
    );
    assert.doesNotMatch(html, /\sstyle=|\son[a-z]+=/u);
  }
});
