import { cp, mkdir, readdir, rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(projectRoot, "dist");
const publicAllowlist = ["index.html", "styles.css", "app.js", "assets", "v1"];
const copiedEntries = ["index.html", "styles.css", "app.js", "assets"];
// The first website (Aug 2026) is kept as a static archive and served at /v1/.
const archives = { v1: path.join("archive", "v1") };

await rm(distDir, { recursive: true, force: true });
await mkdir(distDir, { recursive: true });

// Copy only the explicitly allowlisted public entries. Worker source, Wrangler
// config, migrations, tests, README files and local secrets never reach dist/.
for (const entry of copiedEntries) {
  await cp(path.join(projectRoot, entry), path.join(distDir, entry), {
    recursive: true,
  });
}
for (const [name, source] of Object.entries(archives)) {
  await cp(path.join(projectRoot, source), path.join(distDir, name), {
    recursive: true,
  });
}

const emittedEntries = (await readdir(distDir)).sort();
const expectedEntries = [...publicAllowlist].sort();
if (JSON.stringify(emittedEntries) !== JSON.stringify(expectedEntries)) {
  throw new Error(`Unexpected static build output: ${emittedEntries.join(", ")}`);
}

console.log(JSON.stringify({
  event: "static_build_complete",
  output: distDir,
  entries: emittedEntries,
}));
