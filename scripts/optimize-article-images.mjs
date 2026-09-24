import { readFile, readdir } from "node:fs/promises";
import { execFileSync } from "node:child_process";
import { resolve, join } from "node:path";

const edition = process.argv[2];
if (!edition || !/^\d{4}-\d{2}-\d{2}$/.test(edition)) {
  throw new Error("Usage: npm run images:optimize -- YYYY-MM-DD (requires cwebp)");
}
const directory = resolve("assets/articles", edition);
for (const file of await readdir(join(directory, "originals"))) {
  if (!file.endsWith(".png")) continue;
  const input = join(directory, "originals", file);
  const bytes = await readFile(input);
  if (bytes.toString("hex", 0, 8) !== "89504e470d0a1a0a") throw new Error(`Invalid PNG: ${file}`);
  const originalWidth = bytes.readUInt32BE(16);
  const originalHeight = bytes.readUInt32BE(20);
  const portrait = originalWidth * 3 === originalHeight * 2;
  if (!portrait && originalWidth * 3 !== originalHeight * 4) {
    throw new Error(`${file}: generate a 2:3 portrait or legacy 4:3 original; do not distort it.`);
  }
  for (const width of portrait ? [160, 320, 640] : [640, 1280]) {
    const output = join(directory, `${file.slice(0, -4)}-${width}.webp`);
    const height = width * originalHeight / originalWidth;
    execFileSync("cwebp", ["-quiet", "-q", "90", "-m", "6", "-sharp_yuv", "-resize", String(width), String(height), input, "-o", output]);
    console.log(output);
  }
}
