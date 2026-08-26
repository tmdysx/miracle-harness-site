import { access, cp, mkdir, readdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  moduleCatalog,
  renderModulePage,
  validateModuleCatalog,
} from "./module-catalog.mjs";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(projectRoot, "dist");
const publicAllowlist = ["index.html", "styles.css", "app.js", "assets", "modules"];
const copiedEntries = ["index.html", "styles.css", "app.js", "assets"];

await rm(distDir, { recursive: true, force: true });
await mkdir(distDir, { recursive: true });

for (const entry of copiedEntries) {
  await cp(path.join(projectRoot, entry), path.join(distDir, entry), {
    recursive: true,
  });
}

validateModuleCatalog();
const modulesDir = path.join(distDir, "modules");
await mkdir(modulesDir, { recursive: true });

for (const module of moduleCatalog) {
  await access(path.join(projectRoot, module.illustration));
  const moduleDir = path.join(modulesDir, module.slug);
  await mkdir(moduleDir, { recursive: true });
  await writeFile(
    path.join(moduleDir, "index.html"),
    renderModulePage(module),
    "utf8",
  );
}

const emittedEntries = (await readdir(distDir)).sort();
const expectedEntries = [...publicAllowlist].sort();
if (JSON.stringify(emittedEntries) !== JSON.stringify(expectedEntries)) {
  throw new Error(`Unexpected static build output: ${emittedEntries.join(", ")}`);
}

const emittedModuleSlugs = (
  await readdir(modulesDir, { withFileTypes: true })
).map((entry) => {
  if (!entry.isDirectory()) {
    throw new Error(`Unexpected module build artifact: ${entry.name}`);
  }
  return entry.name;
}).sort();
const expectedModuleSlugs = moduleCatalog.map((module) => module.slug).sort();
if (JSON.stringify(emittedModuleSlugs) !== JSON.stringify(expectedModuleSlugs)) {
  throw new Error(`Unexpected module pages: ${emittedModuleSlugs.join(", ")}`);
}

for (const slug of emittedModuleSlugs) {
  const emittedModuleEntries = await readdir(path.join(modulesDir, slug));
  if (JSON.stringify(emittedModuleEntries) !== JSON.stringify(["index.html"])) {
    throw new Error(
      `Unexpected output for module ${slug}: ${emittedModuleEntries.join(", ")}`,
    );
  }
}

console.log(JSON.stringify({
  event: "static_build_complete",
  output: distDir,
  entries: emittedEntries,
  modulePages: emittedModuleSlugs.length,
}));
