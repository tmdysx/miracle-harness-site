import { cp, mkdir, readdir, rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(projectRoot, "dist");
const allowedEntries = ["index.html", "styles.css", "app.js", "assets"];

await rm(distDir, { recursive: true, force: true });
await mkdir(distDir, { recursive: true });

for (const entry of allowedEntries) {
  await cp(path.join(projectRoot, entry), path.join(distDir, entry), {
    recursive: true,
  });
}

const emittedEntries = (await readdir(distDir)).sort();
const expectedEntries = [...allowedEntries].sort();
if (JSON.stringify(emittedEntries) !== JSON.stringify(expectedEntries)) {
  throw new Error(`Unexpected static build output: ${emittedEntries.join(", ")}`);
}

console.log(JSON.stringify({
  event: "static_build_complete",
  output: distDir,
  entries: emittedEntries,
}));
