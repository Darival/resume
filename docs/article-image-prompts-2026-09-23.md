# Vertical pixel-art thumbnails — 2026-09-23

Generated separately with the built-in ImageGen tool for the existing five articles. The previous landscape assets are retained in `assets/articles/2026-09-21/`; article copy, dates and ordering are unchanged.

## Production assets

Original PNGs: `assets/articles/2026-09-23/originals/<slug>.png`, each 1024×1536 (2:3). WebP variants: `<slug>-160.webp` (160×240), `<slug>-320.webp` (320×480), `<slug>-640.webp` (640×960), in the parent directory. Run `npm run images:optimize -- 2026-09-23` to reproduce variants. The page reserves the ratio from optional image.width/image.height; legacy images without dimensions retain the old 4:3 fallback.

## Direction

Large stepped edges, bold silhouettes and coarse pixel clusters replace the fine isometric details that disappeared at thumbnail scale. Subjects fill the vertical frame. Palette: near-black green, teal and mint. Each thumbnail stays on the left. The microphone was generated first; its original was the style reference for the remaining four, never a subject reference.

## Exact prompts and article mapping

### voice-tools

Article: https://blog.google/innovation-and-ai/technology/developers-tools/build-real-time-voice-applications-gemini-audio/

Prompt:

Use case: stylized-concept. Generate ONE original vertical editorial thumbnail for CERCO.DEV. Portrait canvas exactly 2:3 (1024x1536 ideal). Authentic coarse hand-placed 2D pixel art, as if drawn on a 64x96 pixel canvas and enlarged with nearest-neighbor: BIG clearly visible square pixel clusters, hard staircase edges, flat 6-color shading, selective large checkerboard dithering. Must read clearly displayed only 120x180 pixels wide/tall. Tight close composition fills 85-90 percent of the entire height and most of the width with a large recognizable subject and connected elements stacked VERTICALLY. Limited monochrome green palette: background #071412, dark teal #123c35, teal #0f766e, green #4caa91, mint #89dfc6, pale mint #e7f2ef. No smooth gradients, no antialiasing, no bloom, no glossy 3D, no realistic lighting, no tiny fine stippling, no intricate thin wire networks, no tiny objects floating in a large empty field. No typography, letters, numbers, logos, watermark, frame or UI screenshot. Make it look like a bold late-1980s game sprite illustration, with large blocks and silhouettes, NOT a finely rendered 3D object passed through a pixel filter. The background is solid near-black green, not transparent. Subject: A large chunky retro microphone occupies the upper half, with a bold mint waveform below it, which flows vertically down through thick stepped cables into two simple square software-tool blocks near the bottom. Clear silhouette, strong vertical rhythm, use the full tall canvas.

### agent-audit

Article: https://openai.com/index/model-misalignment-reporting-framework/

Prompt:

Use case: stylized-concept. Generate ONE original vertical editorial thumbnail for CERCO.DEV. Portrait canvas exactly 2:3 (1024x1536 ideal). Authentic coarse hand-placed 2D pixel art, as if drawn on a 64x96 pixel canvas and enlarged with nearest-neighbor: BIG clearly visible square pixel clusters, hard staircase edges, flat 6-color shading, selective large checkerboard dithering. Must read clearly displayed only 120x180 pixels wide/tall. Tight close composition fills 85-90 percent of the entire height and most of the width with a large recognizable subject and connected elements stacked VERTICALLY. Limited monochrome green palette: background #071412, dark teal #123c35, teal #0f766e, green #4caa91, mint #89dfc6, pale mint #e7f2ef. No smooth gradients, no antialiasing, no bloom, no glossy 3D, no realistic lighting, no tiny fine stippling, no intricate thin wire networks, no tiny objects floating in a large empty field. No typography, letters, numbers, logos, watermark, frame or UI screenshot. Make it look like a bold late-1980s game sprite illustration, with large blocks and silhouettes, NOT a finely rendered 3D object passed through a pixel filter. The background is solid near-black green, not transparent. Subject: A very large magnifying glass fills the upper two thirds, its thick square-pixel lens inspecting a simple small agent/computer symbol. Its diagonal handle connects visually downward to a chunky branching audit trail ending in two large square nodes at the bottom. Clear inspection metaphor, full tall composition. The attached microphone illustration is ONLY a reference for coarse pixel scale, palette, and vertical framing; DO NOT include a microphone, sound waves or tool symbols. Make the specified subject visually distinct.

### inference-flows

Article: https://developer.nvidia.com/blog/benchmarking-llm-inference-at-scale-with-aiperf/

Prompt:

Use case: stylized-concept. Generate ONE original vertical editorial thumbnail for CERCO.DEV. Portrait canvas exactly 2:3 (1024x1536 ideal). Authentic coarse hand-placed 2D pixel art, as if drawn on a 64x96 pixel canvas and enlarged with nearest-neighbor: BIG clearly visible square pixel clusters, hard staircase edges, flat 6-color shading, selective large checkerboard dithering. Must read clearly displayed only 120x180 pixels wide/tall. Tight close composition fills 85-90 percent of the entire height and most of the width with a large recognizable subject and connected elements stacked VERTICALLY. Limited monochrome green palette: background #071412, dark teal #123c35, teal #0f766e, green #4caa91, mint #89dfc6, pale mint #e7f2ef. No smooth gradients, no antialiasing, no bloom, no glossy 3D, no realistic lighting, no tiny fine stippling, no intricate thin wire networks, no tiny objects floating in a large empty field. No typography, letters, numbers, logos, watermark, frame or UI screenshot. Make it look like a bold late-1980s game sprite illustration, with large blocks and silhouettes, NOT a finely rendered 3D object passed through a pixel filter. The background is solid near-black green, not transparent. Subject: A tall retro server tower fills the center from upper to lower frame. Large square request packets enter from the top, descend through two broad parallel channels along the tower, and emerge at the bottom. Big flat block forms, visibly different densities of square packets, no graphs or measurements. The attached microphone illustration is ONLY a reference for coarse pixel scale, palette, and vertical framing; DO NOT include a microphone, sound waves or tool symbols. Make the specified subject visually distinct.

### edge-circuits

Article: https://developer.nvidia.com/blog/tensorrt-edge-llm-completes-the-mlperf-edge-agentic-benchmark-6-4x-faster-on-jetson-agx-thor/

Prompt:

Use case: stylized-concept. Generate ONE original vertical editorial thumbnail for CERCO.DEV. Portrait canvas exactly 2:3 (1024x1536 ideal). Authentic coarse hand-placed 2D pixel art, as if drawn on a 64x96 pixel canvas and enlarged with nearest-neighbor: BIG clearly visible square pixel clusters, hard staircase edges, flat 6-color shading, selective large checkerboard dithering. Must read clearly displayed only 120x180 pixels wide/tall. Tight close composition fills 85-90 percent of the entire height and most of the width with a large recognizable subject and connected elements stacked VERTICALLY. Limited monochrome green palette: background #071412, dark teal #123c35, teal #0f766e, green #4caa91, mint #89dfc6, pale mint #e7f2ef. No smooth gradients, no antialiasing, no bloom, no glossy 3D, no realistic lighting, no tiny fine stippling, no intricate thin wire networks, no tiny objects floating in a large empty field. No typography, letters, numbers, logos, watermark, frame or UI screenshot. Make it look like a bold late-1980s game sprite illustration, with large blocks and silhouettes, NOT a finely rendered 3D object passed through a pixel filter. The background is solid near-black green, not transparent. Subject: A tall compact circuit board seen straight from above, almost filling the portrait canvas. One oversized square microprocessor near the upper center, two large memory blocks below, and a sensor connector at the bottom joined by thick stepped circuit traces. Simple bold macro geometry and hard pixel corners. The attached microphone illustration is ONLY a reference for coarse pixel scale, palette, and vertical framing; DO NOT include a microphone, sound waves or tool symbols. Make the specified subject visually distinct.

### decision-paths

Article: https://typesafe.ai/blog/introducing-system-one-models-and-jev

Prompt:

Use case: stylized-concept. Generate ONE original vertical editorial thumbnail for CERCO.DEV. Portrait canvas exactly 2:3 (1024x1536 ideal). Authentic coarse hand-placed 2D pixel art, as if drawn on a 64x96 pixel canvas and enlarged with nearest-neighbor: BIG clearly visible square pixel clusters, hard staircase edges, flat 6-color shading, selective large checkerboard dithering. Must read clearly displayed only 120x180 pixels wide/tall. Tight close composition fills 85-90 percent of the entire height and most of the width with a large recognizable subject and connected elements stacked VERTICALLY. Limited monochrome green palette: background #071412, dark teal #123c35, teal #0f766e, green #4caa91, mint #89dfc6, pale mint #e7f2ef. No smooth gradients, no antialiasing, no bloom, no glossy 3D, no realistic lighting, no tiny fine stippling, no intricate thin wire networks, no tiny objects floating in a large empty field. No typography, letters, numbers, logos, watermark, frame or UI screenshot. Make it look like a bold late-1980s game sprite illustration, with large blocks and silhouettes, NOT a finely rendered 3D object passed through a pixel filter. The background is solid near-black green, not transparent. Subject: A thick stepped decision tree flows vertically from a large input square at the top, forks into two paths in the middle and finishes at three substantial geometric output nodes at the bottom. One mint path is brighter, the others teal. Giant square pixels, simple readable branching routes, a compact tall composition. The attached microphone illustration is ONLY a reference for coarse pixel scale, palette, and vertical framing; DO NOT include a microphone, sound waves or tool symbols. Make the specified subject visually distinct.
