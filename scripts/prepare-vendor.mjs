import { copyFile, mkdir } from "node:fs/promises";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const destination = new URL("../assets/vendor/", import.meta.url);
await mkdir(destination, { recursive: true });
for (const file of ["gsap.min.js", "ScrollTrigger.min.js"]) {
  await copyFile(require.resolve(`gsap/dist/${file}`), new URL(file, destination));
}
console.log("Prepared local GSAP and ScrollTrigger assets.");
