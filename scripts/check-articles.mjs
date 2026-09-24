import { readFile, stat } from "node:fs/promises";
import { resolve, relative, sep } from "node:path";
import vm from "node:vm";
import assert from "node:assert/strict";

const sandbox = { window: {} };
vm.runInNewContext(await readFile("articles.js", "utf8"), sandbox);
const articles = sandbox.window.SITE_ARTICLES;
assert.equal(articles.length, 5, "The weekly edition must contain exactly five articles");
assert.equal(new Set(articles.map((article) => article.url)).size, 5, "Duplicate article URLs");
let images = 0;

function webpDimensions(bytes) {
  for (let offset = 12; offset + 8 <= bytes.length;) {
    const type = bytes.toString("ascii", offset, offset + 4);
    const length = bytes.readUInt32LE(offset + 4);
    const data = offset + 8;
    if (type === "VP8X") return [1 + bytes.readUIntLE(data + 4, 3), 1 + bytes.readUIntLE(data + 7, 3)];
    if (type === "VP8 ") return [bytes.readUInt16LE(data + 6) & 0x3fff, bytes.readUInt16LE(data + 8) & 0x3fff];
    if (type === "VP8L") {
      const bits = bytes.readUInt32LE(data + 1);
      return [(bits & 0x3fff) + 1, ((bits >>> 14) & 0x3fff) + 1];
    }
    offset = data + length + (length % 2);
  }
  throw new Error("No WebP image dimensions found");
}

for (const article of articles) {
  assert.ok(["https:", "http:"].includes(new URL(article.url).protocol));
  assert.ok(article.title && article.source && article.summaries.es && article.summaries.en);
  assert.match(article.publishedAt, /^\d{4}-\d{2}-\d{2}$/);
  assert.equal(new Date(`${article.publishedAt}T12:00:00Z`).toISOString().slice(0, 10), article.publishedAt);
  if (!article.image) continue;
  const { src, srcset, alt, width = 1280, height = 960 } = article.image;
  assert.ok(Number.isSafeInteger(width) && width > 0 && Number.isSafeInteger(height) && height > 0);
  const portrait = width * 3 === height * 2;
  assert.ok(portrait || width * 3 === height * 4, "Expected 2:3 portrait or legacy 4:3 art");
  assert.ok(alt.es && alt.en, `Missing bilingual alt text: ${article.title}`);
  const variants = srcset.split(",").map((entry) => entry.trim().split(/\s+/));
  assert.deepEqual(variants.map(([, descriptor]) => descriptor), portrait ? ["160w", "320w", "640w"] : ["640w", "1280w"]);
  assert.equal(variants.at(-1)[0], src, "Default image must match the large variant");
  for (const [path, descriptor] of variants) {
    const directory = resolve("assets/articles");
    const local = resolve(path);
    assert.ok(!relative(directory, local).startsWith(`..${sep}`) && relative(directory, local) !== "..");
    const bytes = await readFile(local);
    assert.equal(bytes.toString("ascii", 0, 4), "RIFF");
    assert.equal(bytes.toString("ascii", 8, 12), "WEBP");
    const [actualWidth, actualHeight] = webpDimensions(bytes);
    assert.equal(actualWidth, Number.parseInt(descriptor, 10), `Incorrect width descriptor: ${path}`);
    assert.equal(actualWidth * height, actualHeight * width, `Incorrect aspect ratio: ${path}`);
    if (path === src) assert.deepEqual([actualWidth, actualHeight], [width, height]);
    assert.ok((await stat(local)).size < 350_000, `Image exceeds 350 KB: ${path}`);
    assert.ok(descriptor);
  }
  images++;
}
console.log(`Validated ${articles.length} articles, ${images} illustrated, dates, bilingual copy and local WebP assets.`);
