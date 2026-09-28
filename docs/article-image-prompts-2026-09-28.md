# Weekly articles and image prompts — 2026-09-28

## Editorial record

- Publication window: **2026-09-21 00:00:00 America/Mazatlan (UTC−07:00)** inclusive to **2026-09-28 00:00:00 America/Mazatlan (UTC−07:00)** exclusive.
- `publishedAt` records the original date displayed by the source, not a crawl/update date. All five selected pages were read before writing summaries.
- `sharedAt`: **2026-09-28**, the local sharing date. It is not used for eligibility, ordering or visible dates.
- Compared twelve distinct candidates below. Reviewed OpenAI, Google/DeepMind, Anthropic, DeepSeek, NVIDIA, Edge Impulse, AWS and the TypeSafe blog. DeepSeek's latest changelog entry was September 10 (out of window and already shared). The Raspberry Pi/LiteRT tutorial was August 11 and was excluded. NVIDIA OpenShell was September 28 and was excluded.
- Checked all Git revisions of `articles.js`, current articles and equivalent announcements. No selected URL or announcement was previously shared.
- Editorial balance: two substantive hardware implementations, one local/hybrid agent architecture, one security guide and one production optimization guide. Five provider families, one article each. Hardware is an additional preference, not a quota; voice has no special weight.
- The local/cloud split is a concrete integration pattern, not a claim that Google invented a new paradigm. Vendor examples are not guarantees of production safety or latency.

## Candidate comparison

| Original date | Candidate | Decision |
| --- | --- | --- |
| 2026-09-25 | [AWS: Controlling delegation in agentic AI](https://aws.amazon.com/blogs/publicsector/controlling-delegation-in-agentic-ai-with-amazon-bedrock-agent-core/) | Selected: authorization boundaries and practical adversarial checks. |
| 2026-09-23 | [Google: Local AI Models in the Antigravity SDK](https://developers.googleblog.com/introducing-support-for-local-ai-models-in-the-antigravity-sdk/) | Selected: runnable local/hybrid agent integration; memory and permissions caveats. |
| 2026-09-22 | [NVIDIA: Accelerating a ROS 2 Node](https://developer.nvidia.com/blog/accelerating-a-ros-2-node-with-an-ai-agent-and-nvidia-isaac-ros/) | Selected: concrete robotics implementation and verification. |
| 2026-09-22 | [OpenAI: Better prompt caching for GPT-6](https://openai.com/index/better-prompt-caching-for-gpt-6/) | Selected: production cost/latency diagnostics, beyond a model announcement. |
| 2026-09-21 | [Edge Impulse: QCC744M-EVK, Edge Impulse and Zephyr](https://www.edgeimpulse.com/blog/qualcomm-technologies-first-risc-v-silicon-qcc744m-evk-supported-on-edge-impulse-and-zephyr/) | Selected: substantive electronics, open firmware and sensor integration. |
| 2026-09-23 | [NVIDIA: SWE-Serve](https://developer.nvidia.com/blog/how-swe-serve-exposes-the-gap-between-local-tests-and-live-serving/) | Strong runner-up: end-to-end evaluation. Prioritized two complementary hardware implementations this week. |
| 2026-09-24 | [Google: REST APIs into MCP tools](https://developers.googleblog.com/turn-your-rest-apis-into-mcp-tools-with-google-cloud-api-gateway/) | Useful backend integration; local execution offered a more distinct architecture in this edition. |
| 2026-09-22 | [Anthropic: Claude Opus 5.5](https://www.anthropic.com/claude-opus-5-5) | Relevant safety and API changes; practical tutorials ranked higher than another model launch. |
| 2026-09-22 | [OpenAI: GPT-6 Sol and Luna](https://openai.com/index/introducing-gpt-6-sol-and-luna/) | Compared the launch with its specific caching article; chose the more actionable integration guidance, not both. |
| 2026-09-22 | [OpenAI: Effective third party assessments](https://openai.com/index/priorities-principles-third-party-assessments/) | Important assurance principles; AWS supplied a more immediate developer exercise. |
| 2026-09-23 | [Google DeepMind: Private AI Compute memory](https://deepmind.google/blog/advancing-private-ai-compute-with-secure-server-side-memory/) | Technical privacy architecture; future-facing capability, less immediately implementable. |
| 2026-09-21 | [Edge Impulse: Purina smart pet feeder](https://www.edgeimpulse.com/blog/how-purina-petivity-built-an-ai-powered-smart-pet-feeder-using-edge-impulse/) | Useful product experience; the Zephyr piece offered a more reproducible hardware starting point. |

## Image production

Generated five separate originals with the **built-in ImageGen tool**, following the `imagegen` skill. No external API or alternate provider. Consulted `docs/article-image-prompts-2026-09-23.md` and the existing thumbnails as style references; no historical assets were replaced.

Originals: `assets/articles/2026-09-28/originals/<slug>.png`.
Variants: `assets/articles/2026-09-28/<slug>-160.webp`, `-320.webp`, `-640.webp`.
The PNGs are 1024×1536. WebPs are 160×240, 320×480 and 640×960. Reproduce with `npm run images:optimize -- 2026-09-28`.

All five outputs were inspected for motif, vertical framing, coarse pixels, palette and absence of text/branding. These are conceptual illustrations, not technical schematics, photographs of events or measured results. The first generation call was interrupted before any image was saved; a filesystem check confirmed no output before retrying. The five completed outputs are reused without additional generation.

## Exact prompt set

Local validation passed: JavaScript syntax, five valid illustrated records, strict weekly window, historical URL checks, CSS build, and whitespace checks. Browser review covered ES/EN, language persistence, stable publication-date order, image/article pairing and 390/768/1440 px widths without horizontal overflow or console warnings/errors. The build left no generated CSS or vendor diff. Each 160 px thumbnail is approximately 8–12 KB; all 640 px variants are below 67 KiB.

Each call used the following base, followed by the corresponding subject paragraph. No reference-image input and no transparent background.

### Base

Use case: stylized-concept. Generate ONE original vertical editorial thumbnail for CERCO.DEV. Portrait canvas exactly 2:3 (1024x1536 ideal). Authentic coarse hand-placed 2D pixel art, as if drawn on a 64x96 pixel canvas and enlarged with nearest-neighbor: BIG clearly visible square pixel clusters, hard staircase edges, flat 6-color shading, selective large checkerboard dithering. Must read clearly displayed only 72 to 160 pixels wide. Tight close composition fills 85-90 percent of the entire height and most of the width with a large recognizable subject and connected elements stacked VERTICALLY. Limited monochrome green palette: background #071412, dark teal #123c35, teal #0f766e, green #4caa91, mint #89dfc6, pale mint #e7f2ef. No smooth gradients, no antialiasing, no bloom, no glossy 3D, no realistic lighting, no tiny fine stippling, no intricate thin wire networks, no tiny objects floating in a large empty field. No typography, letters, numbers, logos, watermark, frame or UI screenshot. Make it look like a bold late-1980s game sprite illustration, with large blocks and silhouettes, NOT a finely rendered 3D object passed through a pixel filter. The background is solid near-black green, not transparent. This is a conceptual editorial illustration, not a photograph of an event or a chart of measured results.

### delegation-lock

Article: https://aws.amazon.com/blogs/publicsector/controlling-delegation-in-agentic-ai-with-amazon-bedrock-agent-core/

Original: `assets/articles/2026-09-28/originals/delegation-lock.png`

Subject: a large upright mechanical padlock integrated into a three-way connector. Three thick cables reach the bottom of the composition; their connections must pass through the lock body. A single broad mint keyhole is the focal point, no symbols or text. Concept: authorization checks at the handoff between an AI agent, its tools and data access. The lock and cables form one tall compact object, not disconnected icons.

### local-workshop

Article: https://developers.googleblog.com/introducing-support-for-local-ai-models-in-the-antigravity-sdk/

Original: `assets/articles/2026-09-28/originals/local-workshop.png`

Subject: a large open laptop occupying the lower two-thirds, its screen filled by one solid microchip shape, with a small cloud at the top joined to the laptop by two thick stepped paths. Emphasize the physical laptop and local chip, not the cloud. Concept: a cloud planner coordinating local AI work on the developer's own computer. No text, no code symbols, no UI details on the screen.

### robot-vision

Article: https://developer.nvidia.com/blog/accelerating-a-ros-2-node-with-an-ai-agent-and-nvidia-isaac-ros/

Original: `assets/articles/2026-09-28/originals/robot-vision.png`

Subject: a tall articulated industrial robotic arm with a large camera eye near its gripper, connected directly to a compact GPU module in its heavy base by one broad stepped circuit path. Large simple mechanical joints form the vertical silhouette. Concept: vision inference in robotics and efficient device-side data movement. No humanoid face, no lettering, no speed numbers, no plotted metrics.

### prompt-cache

Article: https://openai.com/index/better-prompt-caching-for-gpt-6/

Original: `assets/articles/2026-09-28/originals/prompt-cache.png`

Subject: a tall compact mechanical carousel holding a stack of thick rectangular memory tiles; one large tile is being reused through a bold U-shaped return chute wrapping the stack. Mint highlights emphasize the reused tile and connector. Concept: reusing stable context in AI requests instead of processing the same prompt again. No writing on tiles, no numeric counters, no graph or UI, no money symbols.

### sensor-board

Article: https://www.edgeimpulse.com/blog/qualcomm-technologies-first-risc-v-silicon-qcc744m-evk-supported-on-edge-impulse-and-zephyr/

Original: `assets/articles/2026-09-28/originals/sensor-board.png`

Subject: a close-up vertical electronics prototyping assembly. A large microcontroller board at the bottom is wired with two thick cables to a smaller inertial sensor board at the top. Three oversized physical pushbuttons and a short strip of three square LEDs are integrated beside the lower chip. Concept: collecting motion sensor data, running local inference, and providing physical controls and feedback. No text, branding or schematic labels; use large unmistakable component silhouettes.
