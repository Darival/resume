# Weekly article illustrations and selection — 2026-10-05

## Editorial window and dates

Calculated before research: America/Mazatlan (UTC−07:00), from **2026-09-28 00:00 inclusive** to **2026-10-05 00:00 exclusive**. Eligible original publication dates are September 28 through October 4. Every selected article has `sharedAt: "2026-10-05"`; visible dates and sorting use `publishedAt`, never the sharing date.

Original dates were checked on each selected article's own dated heading/byline, not search crawl dates. Titles retain the original source wording. Content was read before writing summaries. URLs and announcement topics were checked against the complete Git history of articles.js; none of these five was previously shared. The DevDay recap is selected for the newly announced Decisions API, not to repeat the earlier Agents API announcement. No matching historical illustration existed.

## Selection comparison

Eleven distinct candidates were compared, with original pages opened. Ranking emphasized practical learning, substantive electronics/hardware integration, novel interfaces, safety and evidence, not recency alone.

| Candidate | Original date | Editorial decision |
| --- | --- | --- |
| [Local C++ / TensorRT RTX samples](https://developer.nvidia.com/blog/build-local-ai-apps-with-c-and-nvidia-tensorrt-rtx-samples/) | 2026-10-01 | Selected: concrete native implementation, model export/runtime separation and hardware acceleration. |
| [Dogwood Local Engine](https://aws.amazon.com/blogs/opensource/introducing-the-dogwood-local-engine-temporal-governance-for-agent-actions/) | 2026-09-30 | Selected: temporal authorization, durable history and explicit enforcement responsibilities; reusable beyond AWS. |
| [DevDay 2026 Recap](https://openai.com/index/devday-2026-recap/) | 2026-09-29 | Selected specifically for finite-answer Decisions API; relevant to the interest in alternatives to open-ended chat. |
| [VSS Blueprint 3.3](https://developer.nvidia.com/blog/lower-the-cost-of-building-and-running-visual-ai-agents-with-nvidia-vss-blueprint-3-3/) | 2026-09-29 | Selected: camera integration, shared video services, runtime efficiency and deployment constraints. |
| [SMT polarity validation](https://aws.amazon.com/blogs/industries/reduce-smt-defects-with-agentic-ai-automating-polarity-validation-on-aws/) | 2026-09-28 | Selected: direct electronics application, failed approach analysis, drawing-view extraction and engineer correction loop. |
| [A model guide for the GPT-6 family](https://openai.com/index/practical-guide-building-gpt-6/) | 2026-10-02 | Strong alternate; the C++ implementation adds more concrete hardware-facing code this week. |
| [Model-distillation campaign report](https://openai.com/index/disrupting-a-coordinated-model-distillation-campaign/) | 2026-09-30 | Strong safety alternate; Dogwood offers a more directly reusable control implementation for this edition. |
| [Claude Sonnet 5.5](https://www.anthropic.com/claude-sonnet-5-5) | 2026-09-28 | Relevant product update; concrete implementation learning ranked above another model performance announcement. |
| [OpenShell runtime controls](https://developer.nvidia.com/blog/add-runtime-controls-to-ai-agents-with-nvidia-openshell/) | 2026-09-28 | Strong alternate; overlaps the selected enforcement topic, while Dogwood adds temporal policy semantics. |
| [Video diffusion attention on TPUs](https://developers.googleblog.com/accelerating-spatio-temporal-attention-for-video-diffusion-on-tpus/) | 2026-09-30 | Substantial kernel engineering, less directly applicable to the selected application-building interests. |
| [DOCA Agent Skills](https://developer.nvidia.com/blog/build-applications-on-nvidia-bluefield-faster-with-nvidia-doca-agent-skills/) | 2026-10-01 | Practical hardware tooling, but more specialized BlueField infrastructure; maintain topic diversity. |

Additional discovery checked Google/DeepMind, DeepSeek, Edge Impulse, TypeSafe and Raspberry Pi. No extra recent item from those searches displaced the selected five. DeepSeek's latest dated changelog entry found was September 10; existing TypeSafe/Jev and Edge Impulse references remain excluded as old or previously shared. No date window expansion or same-day filler.

The mix deliberately favors implementation: two NVIDIA, two AWS, one OpenAI. Safety and production principles overlap in Dogwood; connected-device monitoring and electronics are covered by VSS and SMT, with local inference in C++. No voice quota. No rigid vendor quota. Equal September 29 dates preserve Decisions API before VSS.

## Evidence boundaries

- Decisions API: the September 29 recap describes predefined answers from text/images and limited preview. Do not infer Jev-equivalent probability output, calibration, deterministic latency or suitability for safety-critical control.
- Dogwood: a local Apache-2.0 engine, not an AWS-only managed dependency. The host integration must enforce verdicts and protect event integrity; the library itself does not sandbox agents.
- SMT: a prototype and vendor-authored account, not independently validated safety evidence. Self-assessed confidence is not a calibrated correctness guarantee. Do not repeat headline business metrics as established results.
- VSS: the spill demo is synthetic. Runtime results depend on footage, settings and NVIDIA hardware; no production safety guarantee is implied.
- C++ samples: portable ONNX Runtime interfaces and separate export step; accelerated provider paths and hardware-dependent quantization are not universally portable.

## Image production

Five separate built-in ImageGen calls, no external API or alternate provider. Existing September 23 prompt direction and September 23/28 thumbnails were inspected first. All generated originals were visually inspected, copied into this repository, and retained at 1024×1536 (2:3); no stretching or historical image deletion.

Each illustration is conceptual pixel art, not a photograph of an incident, product screenshot, benchmark or measurement. The finite-choice sorting machine is an interface metaphor, not a claim that Decisions API controls physical machinery.

Originals: `assets/articles/2026-10-05/originals/<slug>.png`.
Optimized variants: `assets/articles/2026-10-05/<slug>-160.webp` (160×240), `-320.webp` (320×480), `-640.webp` (640×960).
Reproduce with `npm run images:optimize -- 2026-10-05`. All five article records include bilingual visual alt text and local responsive image paths.

## Local validation

Passed `node --check articles.js`, `npm run check:articles`, `npm run build`, and `git diff --check`. Additional checks verified the exact weekly window, sharing date, maximum two articles per source and zero URL matches in Git history. All five original PNGs are 1024×1536; the fifteen WebP variants range from 8,600 to 78,360 bytes. The 160-pixel variants were visually inspected for legibility and subject correspondence.

Browser checks covered Spanish and English, keyboard language selection, language persistence after reload, original-date ordering with stable ties, safe external-link attributes, image loading and widths at 390×844, 768×1024 and 1440×900. No horizontal overflow or console warnings/errors were observed. Tailwind's only generated CSS difference was an unused `.isolate` utility picked up from editorial text; the previously clean style.css was restored and is excluded from the editorial commit.

## Exact prompts and article mapping

### native-inference

Article: https://developer.nvidia.com/blog/build-local-ai-apps-with-c-and-nvidia-tensorrt-rtx-samples/

Original publication: 2026-10-01. Shared: 2026-10-05.

Original asset: `assets/articles/2026-10-05/originals/native-inference.png`.

Prompt:

Use case: stylized-concept. Generate ONE original vertical editorial thumbnail for CERCO.DEV. Portrait canvas exactly 2:3, 1024x1536. Authentic coarse hand-placed 2D pixel art as if drawn on a 64x96 canvas and enlarged with nearest-neighbor: BIG square pixel clusters, hard staircase edges, flat six-color shading, selective coarse checkerboard dithering. Legible at 72-160 pixels wide. Tight composition fills 85-90 percent of the height and most of the width with a recognizable subject stacked VERTICALLY. Palette: solid near-black green background #071412, dark teal #123c35, teal #0f766e, green #4caa91, mint #89dfc6, pale mint #e7f2ef. No smooth gradients, antialiasing, bloom, glossy 3D, realistic lighting, fine stippling, intricate thin wire networks or tiny objects in an empty field. No typography, letters, numbers, mathematical symbols, logos, watermarks, decorative frame or UI screenshot. Bold late-1980s game sprite illustration, not a 3D object with a pixel filter. Conceptual editorial art, not a photograph or a chart of results. Subject: A large retro laptop with a thick stepped screen displaying a simple solid silhouette of a leaf surrounded by a coarse segmentation outline, above an oversized square processor connected to the laptop with two thick circuit paths. Laptop occupies upper two thirds and processor lower third. Clear native on-device computer vision metaphor, no cloud, no lettering on keys. Distinct, compact full-height silhouette.

### temporal-gate

Article: https://aws.amazon.com/blogs/opensource/introducing-the-dogwood-local-engine-temporal-governance-for-agent-actions/

Original publication: 2026-09-30. Shared: 2026-10-05.

Original asset: `assets/articles/2026-10-05/originals/temporal-gate.png`.

Prompt:

Use case: stylized-concept. Generate ONE original vertical editorial thumbnail for CERCO.DEV. Portrait canvas exactly 2:3, 1024x1536. Authentic coarse hand-placed 2D pixel art as if drawn on a 64x96 canvas and enlarged with nearest-neighbor: BIG square pixel clusters, hard staircase edges, flat six-color shading, selective coarse checkerboard dithering. Legible at 72-160 pixels wide. Tight composition fills 85-90 percent of the height and most of the width with a recognizable subject stacked VERTICALLY. Palette: solid near-black green background #071412, dark teal #123c35, teal #0f766e, green #4caa91, mint #89dfc6, pale mint #e7f2ef. No smooth gradients, antialiasing, bloom, glossy 3D, realistic lighting, fine stippling, intricate thin wire networks or tiny objects in an empty field. No typography, letters, numbers, mathematical symbols, logos, watermarks, decorative frame or UI screenshot. Bold late-1980s game sprite illustration, not a 3D object with a pixel filter. Conceptual editorial art, not a photograph or a chart of results. Subject: A tall mechanical checkpoint gate with a chunky closed barrier across the center, a large simple hourglass above it and three broad rectangular event-log blocks stacked underneath it. Mint light follows a thick path from the log through the gate. Represents permissions depending on past events and time, not a promise that all actions are safe. No lock, no text, no numbers. Fill the tall frame.

### finite-decisions

Article: https://openai.com/index/devday-2026-recap/

Original publication: 2026-09-29. Shared: 2026-10-05.

Original asset: `assets/articles/2026-10-05/originals/finite-decisions.png`.

Prompt:

Use case: stylized-concept. Generate ONE original vertical editorial thumbnail for CERCO.DEV. Portrait canvas exactly 2:3, 1024x1536. Authentic coarse hand-placed 2D pixel art as if drawn on a 64x96 canvas and enlarged with nearest-neighbor: BIG square pixel clusters, hard staircase edges, flat six-color shading, selective coarse checkerboard dithering. Legible at 72-160 pixels wide. Tight composition fills 85-90 percent of the height and most of the width with a recognizable subject stacked VERTICALLY. Palette: solid near-black green background #071412, dark teal #123c35, teal #0f766e, green #4caa91, mint #89dfc6, pale mint #e7f2ef. No smooth gradients, antialiasing, bloom, glossy 3D, realistic lighting, fine stippling, intricate thin wire networks or tiny objects in an empty field. No typography, letters, numbers, mathematical symbols, logos, watermarks, decorative frame or UI screenshot. Bold late-1980s game sprite illustration, not a 3D object with a pixel filter. Conceptual editorial art, not a photograph or a chart of results. Subject: A large chunky mechanical sorting hopper at the top accepting two plain square input blocks. Below it a single thick lever directs the path into one of three broad separate output trays stacked in a compact fan near the bottom. One path mint and others teal. Finite predefined choices, simple visible shapes, NOT a branching tree, no probabilities or numeric labels. Tight full-height composition.

### camera-events

Article: https://developer.nvidia.com/blog/lower-the-cost-of-building-and-running-visual-ai-agents-with-nvidia-vss-blueprint-3-3/

Original publication: 2026-09-29. Shared: 2026-10-05.

Original asset: `assets/articles/2026-10-05/originals/camera-events.png`.

Prompt:

Use case: stylized-concept. Generate ONE original vertical editorial thumbnail for CERCO.DEV. Portrait canvas exactly 2:3, 1024x1536. Authentic coarse hand-placed 2D pixel art as if drawn on a 64x96 canvas and enlarged with nearest-neighbor: BIG square pixel clusters, hard staircase edges, flat six-color shading, selective coarse checkerboard dithering. Legible at 72-160 pixels wide. Tight composition fills 85-90 percent of the height and most of the width with a recognizable subject stacked VERTICALLY. Palette: solid near-black green background #071412, dark teal #123c35, teal #0f766e, green #4caa91, mint #89dfc6, pale mint #e7f2ef. No smooth gradients, antialiasing, bloom, glossy 3D, realistic lighting, fine stippling, intricate thin wire networks or tiny objects in an empty field. No typography, letters, numbers, mathematical symbols, logos, watermarks, decorative frame or UI screenshot. Bold late-1980s game sprite illustration, not a 3D object with a pixel filter. Conceptual editorial art, not a photograph or a chart of results. Subject: A large side-view industrial security camera on a bracket occupies the upper half, its wide square lens facing downward toward a compact bottling conveyor with three chunky bottles in the bottom half. A broad stepped cone of mint pixels visually connects camera and bottles. One bottle is slightly tipped, no alarm text or warning symbols. Industrial video monitoring, flat bold pixel silhouettes, no claims of real incident imagery.

### component-inspection

Article: https://aws.amazon.com/blogs/industries/reduce-smt-defects-with-agentic-ai-automating-polarity-validation-on-aws/

Original publication: 2026-09-28. Shared: 2026-10-05.

Original asset: `assets/articles/2026-10-05/originals/component-inspection.png`.

Prompt:

Use case: stylized-concept. Generate ONE original vertical editorial thumbnail for CERCO.DEV. Portrait canvas exactly 2:3, 1024x1536. Authentic coarse hand-placed 2D pixel art as if drawn on a 64x96 canvas and enlarged with nearest-neighbor: BIG square pixel clusters, hard staircase edges, flat six-color shading, selective coarse checkerboard dithering. Legible at 72-160 pixels wide. Tight composition fills 85-90 percent of the height and most of the width with a recognizable subject stacked VERTICALLY. Palette: solid near-black green background #071412, dark teal #123c35, teal #0f766e, green #4caa91, mint #89dfc6, pale mint #e7f2ef. No smooth gradients, antialiasing, bloom, glossy 3D, realistic lighting, fine stippling, intricate thin wire networks or tiny objects in an empty field. No typography, letters, numbers, mathematical symbols, logos, watermarks, decorative frame or UI screenshot. Bold late-1980s game sprite illustration, not a 3D object with a pixel filter. Conceptual editorial art, not a photograph or a chart of results. Subject: A large magnifying lens in the upper half inspecting one oversized two-pin electronic diode with a simple mint polarity band, with its handle extending down toward a compact circuit board and one thick tape-and-reel carrier strip with two component pockets in the lower half. Coarse large pixel shapes, top-down flat electronics inspection, no plus or minus symbols, no engineering labels. Fill the vertical canvas.
