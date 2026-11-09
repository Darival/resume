# Weekly illustrated edition — 2026-11-09

## Window and evidence

Execution clock checked at 2026-11-09 14:57:37 UTC, 07:57:37 America/Mazatlan (UTC−07:00).
Eligible original publications: **2026-11-02 00:00 inclusive to 2026-11-09 00:00 exclusive**, America/Mazatlan.
All records use `sharedAt: 2026-11-09`; visible dates and order use `publishedAt`.
Git was clean on develop at 198875f. Fetched origin and checked the full Git history of articles.js, plus current docs/assets, for duplicate URLs and announcements.

## Comparison of 12 eligible candidates

Five selected:
- 2026-11-05: [GPT‑6 Cyber: Advancing the frontier of aligned cybersecurity agents](https://openai.com/index/introducing-gpt-6-cyber/) — OpenAI.
- 2026-11-04: [Securing Web Agents with the Compile-Then-Execute Paradigm](https://arxiv.org/abs/2611.06039) — Baya · arXiv.
- 2026-11-03: [Don’t Call It a Decision Model](https://typesafe.ai/blog/dont-call-it-a-decision-model) — TypeSafe AI.
- 2026-11-02: [Build efficient agents with knowledge distillation on Amazon SageMaker AI](https://aws.amazon.com/blogs/machine-learning/build-efficient-agents-with-knowledge-distillation-on-amazon-sagemaker-ai/) — AWS.
- 2026-11-02: [TinyML Hits the Memory Wall: A Benchmark of Ten Sub-Watt Edge Devices](https://arxiv.org/abs/2611.03392) — TinyML · arXiv.

Seven alternatives:
- 2026-11-06: [Serverless MCP server for AI agent data lake access on Amazon ECS Fargate](https://aws.amazon.com/blogs/machine-learning/serverless-mcp-server-for-ai-agent-data-lake-access-on-amazon-ecs-fargate/) — Useful metadata and centralized-access architecture; distillation provides a more distinct implementation lesson this week.
- 2026-11-06: [Govern AI agent access with Okta Cross App Access and Amazon Bedrock AgentCore – Part 2](https://aws.amazon.com/blogs/machine-learning/govern-ai-agent-access-with-okta-cross-app-access-and-amazon-bedrock-agentcore-part-2/) — Strong permission design, but vendor-specific prerequisites and conceptual additions; Baya and Cyber already cover security.
- 2026-11-05: [What’s new in intelligent apps at the Android Developer Summit](https://developer.android.com/blog/posts/android-intelligence-system-in-app-agents-ads?hl=en) — APIs and on-device routes; broad product roundup, less focused than the selected implementation guide.
- 2026-11-04: [A thousand fewer paths to root](https://openai.com/index/a-thousand-fewer-paths-to-root/) — Same Cyber research campaign as the selected model announcement; avoid covering it twice.
- 2026-11-04: [STMicroelectronics sharpens agentic-AI coding with new STM32 tools](https://newsroom.st.com/media-center/press-item.html/stmicroelectronics-sharpens-agentic-ai-coding-with-new-stm32-tools-n4799.html) — Relevant embedded tooling; press announcement has less measurement detail than TinyML.
- 2026-11-03: [Accelerating engineering for the physical world](https://openai.com/index/accelerating-engineering-for-the-physical-world/) — Relevant physical engineering, but broad capabilities report; favor concrete hardware methodology.
- 2026-11-02: [Ask, Don't Equip: Question-Driven Coding Agents for Deep Kernel Optimization](https://arxiv.org/abs/2611.03517) — Detailed harness and traces, but specialized GPU optimization; TinyML better matches embedded hardware interest.

Original dates were verified on article bylines (OpenAI, TypeSafe and AWS) and arXiv's original submission metadata (Baya and TinyML). The body and relevant methods/limitations were read before summarizing. Alternative dates were checked on their source pages. No execution-day publication was selected.
DeepSeek's official changelog still led with 2026-10-17. Anthropic's newsroom was consulted; its financial announcements were excluded from technical ranking. Google Coral NPU (2026-10-20) and Chrysalis (2026-10-22) were excluded despite being featured now.

## Editorial reasoning and limits

The mix prioritizes practical implementation, new programming patterns, hardware and safety, without brand quotas. Two research papers earn places for concrete architecture and measurement methods. AWS covers training, evaluation and serving; there is no separate product-operations quota. TypeSafe is a new decomposition article, distinct from the September launch and the October A2UI application. Baya is a different research architecture from those articles.

- GPT-6 Cyber: vendor evaluation and initially restricted access. Report scope controls and monitoring; do not turn benchmark adherence into a universal guarantee.
- Baya: preprint and code-backed compile/execute architecture. Trusted APIs are prepared per website. Its security scope excludes outcome manipulation and tasks requiring instructions from untrusted runtime content.
- TypeSafe: conceptual implementation guidance and a customer-support example. Judgments plus code rules; no inferred physical-control capability or latency guarantee.
- AWS: text-trajectory distillation, problem-level splits and held-out evaluation. The guide also measures regressions in general instruction following. Bedrock and SageMaker are implementation choices, not required for the underlying learning pattern.
- TinyML: preprint, ten devices but measured energy for six. Memory-bound conclusion is tied to tested workloads; larger models and resolutions remain to be tested. No universal hardware ranking.

## Illustration method

Built-in ImageGen, one image per article. No external API, no historical asset deletion and no existing URL illustration to reuse.
Style references read: docs/article-image-prompts-2026-09-23.md and assets/articles/2026-11-02/local-inference-160.webp.
All original outputs were visually inspected before copying. Conceptual illustrations, not event photos or result charts.
Originals: `assets/articles/2026-11-09/originals/<slug>.png`.
WebP variants: `assets/articles/2026-11-09/<slug>-160.webp`, `-320.webp`, `-640.webp`, generated by `npm run images:optimize -- 2026-11-09`.
Every record has bilingual visual alt text and reserved 640×960 dimensions.

## Exact prompt set

### bounded-security

Article: https://openai.com/index/introducing-gpt-6-cyber/

Original date: 2026-11-05. Shared: 2026-11-09.

Asset: `assets/articles/2026-11-09/originals/bounded-security.png`.

Use case: stylized-concept. Asset type: original CERCO.DEV editorial thumbnail. Generate ONE portrait image exactly 2:3, 1024x1536. Authentic coarse 2D pixel art drawn as if on a 64x96 pixel canvas and enlarged with nearest-neighbor: BIG square clusters, hard staircase edges, flat six-color shading, coarse checkerboard dithering. Legible at 72-160 pixels wide. Subject fills 85-90 percent of height with little empty space. Solid near-black green background #071412, dark teal #123c35, teal #0f766e, green #4caa91, mint #89dfc6, pale mint #e7f2ef. No letters, numbers, text, logos, watermarks, punctuation, charts, UI screenshots, decorative frames, smooth gradients, antialiasing, bloom, glossy 3D or fine stippling. Conceptual illustration, not a photograph or a chart of results. Subject: A large upright chunky shield holding a simple square microchip, enclosed by a thick protective fence with a clearly closed gate at the bottom. A single concrete vertical object group, security and authorized scope metaphor.

### compiled-plan

Article: https://arxiv.org/abs/2611.06039

Original date: 2026-11-04. Shared: 2026-11-09.

Asset: `assets/articles/2026-11-09/originals/compiled-plan.png`.

Use case: stylized-concept. Asset type: original CERCO.DEV editorial thumbnail. Generate ONE portrait image exactly 2:3, 1024x1536. Authentic coarse 2D pixel art drawn as if on a 64x96 pixel canvas and enlarged with nearest-neighbor: BIG square clusters, hard staircase edges, flat six-color shading, coarse checkerboard dithering. Legible at 72-160 pixels wide. Subject fills 85-90 percent of height with little empty space. Solid near-black green background #071412, dark teal #123c35, teal #0f766e, green #4caa91, mint #89dfc6, pale mint #e7f2ef. No letters, numbers, text, logos, watermarks, punctuation, charts, UI screenshots, decorative frames, smooth gradients, antialiasing, bloom, glossy 3D or fine stippling. Conceptual illustration, not a photograph or a chart of results. Subject: A tall mechanical roller machine feeds one rigid mint plate bearing only a simple continuous path made of chunky square blocks. The path is physically fixed in the plate, and a separate tray catches small data cubes below. No writing or symbols. Metaphor for a compiled plan and constrained execution.

### judgment-and-code

Article: https://typesafe.ai/blog/dont-call-it-a-decision-model

Original date: 2026-11-03. Shared: 2026-11-09.

Asset: `assets/articles/2026-11-09/originals/judgment-and-code.png`.

Use case: stylized-concept. Asset type: original CERCO.DEV editorial thumbnail. Generate ONE portrait image exactly 2:3, 1024x1536. Authentic coarse 2D pixel art drawn as if on a 64x96 pixel canvas and enlarged with nearest-neighbor: BIG square clusters, hard staircase edges, flat six-color shading, coarse checkerboard dithering. Legible at 72-160 pixels wide. Subject fills 85-90 percent of height with little empty space. Solid near-black green background #071412, dark teal #123c35, teal #0f766e, green #4caa91, mint #89dfc6, pale mint #e7f2ef. No letters, numbers, text, logos, watermarks, punctuation, charts, UI screenshots, decorative frames, smooth gradients, antialiasing, bloom, glossy 3D or fine stippling. Conceptual illustration, not a photograph or a chart of results. Subject: A tall circuit assembly with two large contrasting modules stacked vertically: an upper faceted crystal-like sensor in a square socket, and a lower solid mechanical cam with a cog. Thick stepped connections meet one robust output gate at the base. Metaphor for probabilistic judgment combined with fixed code rules. No labels or schematic symbols.

### agent-distillation

Article: https://aws.amazon.com/blogs/machine-learning/build-efficient-agents-with-knowledge-distillation-on-amazon-sagemaker-ai/

Original date: 2026-11-02. Shared: 2026-11-09.

Asset: `assets/articles/2026-11-09/originals/agent-distillation.png`.

Use case: stylized-concept. Asset type: original CERCO.DEV editorial thumbnail. Generate ONE portrait image exactly 2:3, 1024x1536. Authentic coarse 2D pixel art drawn as if on a 64x96 pixel canvas and enlarged with nearest-neighbor: BIG square clusters, hard staircase edges, flat six-color shading, coarse checkerboard dithering. Legible at 72-160 pixels wide. Subject fills 85-90 percent of height with little empty space. Solid near-black green background #071412, dark teal #123c35, teal #0f766e, green #4caa91, mint #89dfc6, pale mint #e7f2ef. No letters, numbers, text, logos, watermarks, punctuation, charts, UI screenshots, decorative frames, smooth gradients, antialiasing, bloom, glossy 3D or fine stippling. Conceptual illustration, not a photograph or a chart of results. Subject: A large square glass-like vessel at the top sends chunky mint blocks through a wide coarse sieve into a smaller square vessel below. A few dark blocks remain caught in the sieve. Bold simple industrial distillation metaphor for selecting successful examples to train a smaller model. No liquids, text, graphs or numbers.

### memory-bottleneck

Article: https://arxiv.org/abs/2611.03392

Original date: 2026-11-02. Shared: 2026-11-09.

Asset: `assets/articles/2026-11-09/originals/memory-bottleneck.png`.

Use case: stylized-concept. Asset type: original CERCO.DEV editorial thumbnail. Generate ONE portrait image exactly 2:3, 1024x1536. Authentic coarse 2D pixel art drawn as if on a 64x96 pixel canvas and enlarged with nearest-neighbor: BIG square clusters, hard staircase edges, flat six-color shading, coarse checkerboard dithering. Legible at 72-160 pixels wide. Subject fills 85-90 percent of height with little empty space. Solid near-black green background #071412, dark teal #123c35, teal #0f766e, green #4caa91, mint #89dfc6, pale mint #e7f2ef. No letters, numbers, text, logos, watermarks, punctuation, charts, UI screenshots, decorative frames, smooth gradients, antialiasing, bloom, glossy 3D or fine stippling. Conceptual illustration, not a photograph or a chart of results. Subject: A tall compact electronics board with an oversized rectangular memory module at the top and a large square processor below. Between them, a narrow stepped channel holds several large data cubes queued closely together. Thick traces and chunky connectors at the bottom. Memory bandwidth bottleneck metaphor, no charts or text.

## Validation before publication

- `node --check articles.js`, `npm run check:articles`, `npm run build` and `git diff --check` passed.
- Exactly five articles; all original publication dates fall in the recorded weekly window, all `sharedAt` values are 2026-11-09, and none of the selected URLs appeared in the Git history of `articles.js`.
- Five original PNGs are 1024×1536 (2:3). Fifteen WebP variants were produced; individual files weigh 10,868–66,750 bytes. All five illustrations loaded successfully in the local browser and remained legible at thumbnail size.
- Chrome verified Spanish and English summaries, image descriptions, original titles, visible dates, and English persistence after reload. Publication order: November 5, 4, 3, 2, 2; equal-date selection order preserved.
- Responsive checks at 390×844, 768×1024 and 1440×900 showed no horizontal overflow. Mobile article rows remain in one column. All five article links use `target="_blank"` and `rel="noopener noreferrer"`.
- Browser warning/error log was empty. Temporary viewport override was reset and Spanish restored.
- The build regenerated `style.css`; it was clean before this run and its generated changes were restored. No design or application changes are included in this editorial edition.
