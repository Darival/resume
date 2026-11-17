# Weekly illustrated edition — 2026-11-17

## Window and provenance

The scheduled run began on 2026-11-16 and resumed on 2026-11-17. The clock was checked again at 2026-11-17 15:21:12 UTC (08:21:12 America/Mazatlan, UTC−07:00).
The effective publication window was recalculated before final selection: **2026-11-10 00:00 inclusive to 2026-11-17 00:00 exclusive**, America/Mazatlan.
All five records use `sharedAt: 2026-11-17`. Visible dates and sorting use the original `publishedAt`, not the sharing date. Publications from November 17 are excluded.

Git was clean on develop at 6fcf8bc8b516c0dee3cc04ec4cddf25aeb5cb0e9. Origin was fetched at the start and again after resumption; master, develop and their remote counterparts agreed.
The complete available Git history of articles.js and the existing docs/assets were checked for duplicate URLs and announcements.

## Candidate comparison

Five selected, with original dates verified in their sources:
- 2026-11-13: [Releasing the full suite of application APIs](https://api-docs.deepseek.com/updates/#date-2026-11-13) — DeepSeek.
- 2026-11-13: [Adapt Human Motion for Robots with NVIDIA SOMA Retargeter](https://developer.nvidia.com/blog/adapt-human-motion-for-robots-with-nvidia-soma-retargeter/) — NVIDIA.
- 2026-11-12: [How Agent Anomaly Detection scores on benchmarks we didn't write](https://developers.googleblog.com/how-agent-anomaly-detection-scores-on-benchmarks-we-didnt-write/) — Google Developers.
- 2026-11-12: [From prototype to production: Engineering agents with Agent DLC](https://aws.amazon.com/blogs/machine-learning/from-prototype-to-production-engineering-agents-with-agent-dlc/) — AWS.
- 2026-11-12: [Catch Go bugs that fuzzing misses with Gemini and a constraint solver](https://developers.googleblog.com/catch-go-bugs-that-fuzzing-misses-with-gemini-and-a-constraint-solver/) — Google Developers.

Six additional eligible readings were compared:
- 2026-11-16: [Our first phase of embedded assessments](https://openai.com/index/our-first-phase-of-embedded-assessments/) — Valuable independent-assessment protocols; the selected detector study provides more immediate measurements and limitations.
- 2026-11-16: [Securing Your Agents: A Hands-On Guide to Agent Anomaly Detection](https://developers.googleblog.com/securing-your-agents-a-hands-on-guide-to-agent-anomaly-detection/) — Practical companion to the selected detector study. Avoid two slots for the same service; favor the independent benchmark analysis over the deliberately vulnerable demo.
- 2026-11-16: [Agents are sessions, not requests: size GKE node pools for AI agent sessions](https://developers.googleblog.com/agents-are-sessions-not-requests-size-gke-node-pools-for-ai-agent-sessions/) — Useful capacity and cost model with explicit assumptions; AWS provides a broader product-engineering lesson and the Go example adds a distinct programming pattern.
- 2026-11-13: [Production MLOps at GS Caltex with Amazon SageMaker Canvas – Part 1](https://aws.amazon.com/blogs/machine-learning/production-mlops-at-gs-caltex-with-amazon-sagemaker-canvas-part-1/) — Relevant industrial operations case; Agent DLC offers more reusable acceptance and evaluation practice.
- 2026-11-13: [Route coding agent requests to the right model on Amazon Bedrock with NVIDIA NeMo Switchyard](https://aws.amazon.com/blogs/machine-learning/route-coding-agent-requests-to-the-right-model-on-amazon-bedrock-with-nvidia-nemo-switchyard/) — Concrete routing implementation, but experimental and narrower than the selected production lifecycle.
- 2026-11-10: [On-device speech recognition and text-to-speech in Google AI Edge Gallery](https://developers.googleblog.com/on-device-speech-recognition-and-text-to-speech-in-google-ai-edge-gallery/) — Useful local implementation. SOMA provides the stronger connection to hardware; voice receives no special weighting.

This is eleven readings covering ten distinct subjects after treating the two detector pieces as one announcement. Source bylines were checked, rather than crawler timestamps. Selected bodies and their limitations were read before summaries were written. DeepSeek's date comes from the November 13 entry, whose permanent anchor was verified, and the linked [implementation guide](https://api-docs.deepseek.com/guides/build_a_chatbot/) was also read.

OpenAI, Google, DeepSeek and Anthropic official publications were consulted. TypeSafe's featured Jev 1.14 article is dated October 14 and was excluded. Anthropic's November 9 electronics study and NVIDIA's November 9 Holoscan guide fell outside the revised window. The initially generated electronics illustration was not copied into this edition or assigned to another URL.

## Editorial decisions

The selection covers security, practical product engineering, API integration, AI plus deterministic verification, and robotics. Google contributes two readings; each other source contributes one. There are no brand quotas. The independent verification pattern in the Go article fills the new-paradigm interest without claiming a new model architecture. Robotics supplies the hardware connection. No physical safety or production-readiness guarantee is inferred from a demonstration.

The old DeepSeek changelog URL appeared in September for the V4.1 Flash launch. This is a different announcement: the November 13 application API suite, linked to its exact entry. No previous illustration covers this URL or announcement. Other selected URLs and subjects do not occur in the publication history.

## Illustration method and mapping

Skill: imagegen. Mode: built-in ImageGen, generated separately; no external API.
Style reference: docs/article-image-prompts-2026-09-23.md and assets/articles/2026-11-09/judgment-and-code-160.webp.
Original outputs were inspected. These are conceptual illustrations, not photographs or measured-result charts.
Four PNG originals are copied into assets/articles/2026-11-17/originals/. The optimizer produces three WebP variants per image at 160×240, 320×480 and 640×960. Every illustrated record includes bilingual alt text and reserved dimensions.

The trace-inspector request failed with "image generation failed: connection failed: error sending request". No image field or nonexistent asset is included for that article. No external generator was substituted and no historical images were deleted. Generated assets from the first attempt were reused after resumption.

## Exact prompt set

### connected-tools

Article: https://api-docs.deepseek.com/updates/#date-2026-11-13

Original publication: 2026-11-13. Shared: 2026-11-17.

Original: `assets/articles/2026-11-17/originals/connected-tools.png`.
Variants: `assets/articles/2026-11-17/connected-tools-160.webp`, `connected-tools-320.webp`, `connected-tools-640.webp`.

Use case: stylized-concept. Asset type: original CERCO.DEV editorial thumbnail. Generate ONE portrait image exactly 2:3, 1024x1536. Authentic coarse 2D pixel art drawn as if on a 64x96 pixel canvas and enlarged with nearest-neighbor: BIG square clusters, hard staircase edges, flat six-color shading, coarse checkerboard dithering. Legible at 72-160 pixels wide. Subject fills 85-90 percent of height with little empty space. Solid near-black green background #071412, dark teal #123c35, teal #0f766e, green #4caa91, mint #89dfc6, pale mint #e7f2ef. No letters, numbers, text, logos, watermarks, punctuation, charts, UI screenshots, decorative frames, smooth gradients, antialiasing, bloom, glossy 3D or fine stippling. Conceptual illustration, not a photograph or a chart of results. Subject: A large chunky connector hub at the center with three oversized plug-in modules stacked vertically: a globe-shaped sphere, a folded document, and a small speaker. Thick stepped cables connect them into the hub. Clear concrete metaphor for integrated application tools.

### robot-motion

Article: https://developer.nvidia.com/blog/adapt-human-motion-for-robots-with-nvidia-soma-retargeter/

Original publication: 2026-11-13. Shared: 2026-11-17.

Original: `assets/articles/2026-11-17/originals/robot-motion.png`.
Variants: `assets/articles/2026-11-17/robot-motion-160.webp`, `robot-motion-320.webp`, `robot-motion-640.webp`.

Use case: stylized-concept. Asset type: original CERCO.DEV editorial thumbnail. Generate ONE portrait image exactly 2:3, 1024x1536. Authentic coarse 2D pixel art drawn as if on a 64x96 pixel canvas and enlarged with nearest-neighbor: BIG square clusters, hard staircase edges, flat six-color shading, coarse checkerboard dithering. Legible at 72-160 pixels wide. Subject fills 85-90 percent of height with little empty space. Solid near-black green background #071412, dark teal #123c35, teal #0f766e, green #4caa91, mint #89dfc6, pale mint #e7f2ef. No letters, numbers, text, logos, watermarks, punctuation, charts, UI screenshots, decorative frames, smooth gradients, antialiasing, bloom, glossy 3D or fine stippling. Conceptual illustration, not a photograph or a chart of results. Subject: A large chunky humanoid robot in a walking pose, with clearly visible circular shoulder, elbow, hip and knee joints. A smaller simple human-shaped wooden motion mannequin stands behind it in the same pose, joined by two thick stepped connectors at shoulder and knee height. Robot fills nearly the full portrait height. Concrete metaphor for adapting human movement to different robot proportions, no arrows or labels, no brand-specific robot.

### trace-inspector

Article: https://developers.googleblog.com/how-agent-anomaly-detection-scores-on-benchmarks-we-didnt-write/

Original publication: 2026-11-12. Shared: 2026-11-17.

Status: generation failed; no asset, image field or srcset.

Use case: stylized-concept. Asset type: original CERCO.DEV editorial thumbnail. Generate ONE portrait image exactly 2:3, 1024x1536. Authentic coarse 2D pixel art drawn as if on a 64x96 pixel canvas and enlarged with nearest-neighbor: BIG square clusters, hard staircase edges, flat six-color shading, coarse checkerboard dithering. Legible at 72-160 pixels wide. Subject fills 85-90 percent of height with little empty space. Solid near-black green background #071412, dark teal #123c35, teal #0f766e, green #4caa91, mint #89dfc6, pale mint #e7f2ef. No letters, numbers, text, logos, watermarks, punctuation, charts, UI screenshots, decorative frames, smooth gradients, antialiasing, bloom, glossy 3D or fine stippling. Conceptual illustration, not a photograph or a chart of results. Subject: A large inspection lens positioned over a vertical ribbon of chunky connected square events. One dark damaged event is visible inside the lens and an alert beacon sits at the bottom. Metaphor for examining an agent's recorded actions; no shield or locked gate, no implied blocking.

### release-workbench

Article: https://aws.amazon.com/blogs/machine-learning/from-prototype-to-production-engineering-agents-with-agent-dlc/

Original publication: 2026-11-12. Shared: 2026-11-17.

Original: `assets/articles/2026-11-17/originals/release-workbench.png`.
Variants: `assets/articles/2026-11-17/release-workbench-160.webp`, `release-workbench-320.webp`, `release-workbench-640.webp`.

Use case: stylized-concept. Asset type: original CERCO.DEV editorial thumbnail. Generate ONE portrait image exactly 2:3, 1024x1536. Authentic coarse 2D pixel art drawn as if on a 64x96 pixel canvas and enlarged with nearest-neighbor: BIG square clusters, hard staircase edges, flat six-color shading, coarse checkerboard dithering. Legible at 72-160 pixels wide. Subject fills 85-90 percent of height with little empty space. Solid near-black green background #071412, dark teal #123c35, teal #0f766e, green #4caa91, mint #89dfc6, pale mint #e7f2ef. No letters, numbers, text, logos, watermarks, punctuation, charts, UI screenshots, decorative frames, smooth gradients, antialiasing, bloom, glossy 3D or fine stippling. Conceptual illustration, not a photograph or a chart of results. Subject: A tall mechanical testing workbench with a large square software-module cartridge above, a sturdy inspection jig in the middle, and an open collection tray below. A thick return conveyor loops up one side, showing iterative testing. No letters, check marks, scores or charts.

### bug-reproducer

Article: https://developers.googleblog.com/catch-go-bugs-that-fuzzing-misses-with-gemini-and-a-constraint-solver/

Original publication: 2026-11-12. Shared: 2026-11-17.

Original: `assets/articles/2026-11-17/originals/bug-reproducer.png`.
Variants: `assets/articles/2026-11-17/bug-reproducer-160.webp`, `bug-reproducer-320.webp`, `bug-reproducer-640.webp`.

Use case: stylized-concept. Asset type: original CERCO.DEV editorial thumbnail. Generate ONE portrait image exactly 2:3, 1024x1536. Authentic coarse 2D pixel art drawn as if on a 64x96 pixel canvas and enlarged with nearest-neighbor: BIG square clusters, hard staircase edges, flat six-color shading, coarse checkerboard dithering. Legible at 72-160 pixels wide. Subject fills 85-90 percent of height with little empty space. Solid near-black green background #071412, dark teal #123c35, teal #0f766e, green #4caa91, mint #89dfc6, pale mint #e7f2ef. No letters, numbers, text, logos, watermarks, punctuation, charts, UI screenshots, decorative frames, smooth gradients, antialiasing, bloom, glossy 3D or fine stippling. Conceptual illustration, not a photograph or a chart of results. Subject: A chunky mechanical press with two interlocking puzzle-shaped jaws holds a small square bug-like component. Below it a rugged test socket receives that component. Concrete metaphor for solving constraints and reproducing a bug, tall compact silhouette, no code or mathematical symbols.

## Validation before publication

- `node --check articles.js`, `npm run check:articles`, `npm run build` and `git diff --check` passed.
- Five records, five unique URLs, four illustrated articles. All original dates are inside the revised weekly window and all sharing dates are 2026-11-17.
- Four original PNGs are 1024×1536, exactly 2:3. Twelve WebP files weigh 8,580–71,650 bytes each. Thumbnail review confirmed recognizable, article-specific subjects.
- Chrome verified every Spanish and English summary and all four alt descriptions; English persisted after reload. Dates and stable ordering were 13, 13, 12, 12, 12 November. All article links use target=_blank and rel=noopener noreferrer.
- Responsive checks at 390×844, 768×1024 and 1440×900 showed no horizontal overflow. Mobile rows remain in one column. The four images loaded with responsive sources. The unillustrated detector article correctly hides its empty image element.
- Browser warning/error logs were empty. Viewport override was reset and Spanish restored.
- style.css was clean before the build; its incidental regenerated changes were restored. No design or application changes are included.
