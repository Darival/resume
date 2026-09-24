# Local scroll design review

Implemented for local review on 2026-09-21; updated to compact left-hand thumbnails on 2026-09-22, then regenerated as coarse vertical pixel art on 2026-09-23 following review. Approved for production publication on 2026-09-23. The checks below describe local validation; production and automation completion must be verified in the deployment task.

## Preview

Run `npm install` and `npm run dev`, or `npm run build` followed by `npm run serve`. Open http://localhost:4173/.

- Each article has its own small 2:3 vertical thumbnail on the left: 160×240 px on desktop, 144×216 px on tablets, and 72–88 px wide on mobile. The image/text gap is capped at 32 px.
- On mobile, metadata and the title sit beside the thumbnail; the summary and action use the full row width.
- Article rows use their natural content height. There is no sticky artwork panel or image switching.
- Reduced motion or unavailable GSAP: the same complete static thumbnail layout remains usable.
- Hero portrait and the two name lines respond to native scroll. Contact links remain in the initial viewport at the tested sizes.
- The five illustrations were generated with the built-in ImageGen tool. Original PNGs live in `assets/articles/2026-09-23/originals/`; responsive WebP variants live one directory above. Exact prompts and source article mappings are in `article-image-prompts-2026-09-23.md`.

## Verified locally after the thumbnail revision

- All five new thumbnails load and appear to the left of their article titles at 320×700, 768×1024 and 1280×800. Portrait ratio and reserved dimensions match. Settled layouts have no horizontal overflow.
- Spanish and English, light and dark themes checked with the new illustrations; no console errors. Reduced motion leaves zero scroll triggers and all five images and article links visible.
- Keyboard navigation through the article links was checked in the preceding layout revision; whole-link reveal still includes both text and thumbnail.
- The preceding layout revision verified that a simulated image error hides the thumbnail, collapses its grid column and preserves all five article links. That fallback remains in place.
- `npm run build`, `npm run check:articles`, JavaScript syntax checks and `git diff --check` pass.

## Lighthouse

Baseline CLI runs before the thumbnail revisions, with simulated throttling; these are lab measurements, not production field data. Lighthouse was not repeated for the thumbnail revisions.

| Profile | Performance | Accessibility | Best practices | SEO | LCP | TBT | CLS |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Mobile | 99 | 100 | 100 | 100 | 2.3 s | 0 ms | 0 |
| Desktop | 100 | 100 | 100 | 100 | 0.5 s | 0 ms | 0 |

The 600 px portrait variant and immediately visible portrait entrance improved the initial mobile LCP from 3.4 s to 2.3 s. Current vertical WebP variants weigh approximately 7–56 KB each (160, 320 and 640 px widths). Original PNGs are retained but are not requested by the page.

## Release procedure

Publish the approved design, verify its production commit and assets, then apply the automation addition in `weekly-article-images.md` to the latest saved weekly prompt. Do not activate the new workflow before the design is approved and published.
