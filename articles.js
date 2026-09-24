/**
 * Add recommendations using this shape:
 * url, title, source, publishedAt, sharedAt, summaries.es, summaries.en, optional image { src, srcset, width, height, alt: { es, en } }.
 * publishedAt is the verified original publication date (YYYY-MM-DD).
 * sharedAt records when the link was shared here and is not displayed.
 * Keep the published title unchanged and write both summaries in your own words.
 */
window.SITE_ARTICLES = [
  {
    url: "https://openai.com/index/model-misalignment-reporting-framework/",
    title: "Our framework for reporting model misalignment",
    image: {
      src: "assets/articles/2026-09-23/agent-audit-640.webp",
      srcset: "assets/articles/2026-09-23/agent-audit-160.webp 160w, assets/articles/2026-09-23/agent-audit-320.webp 320w, assets/articles/2026-09-23/agent-audit-640.webp 640w",
      width: 640,
      height: 960,
      alt: {"es": "Una lupa pixelada inspecciona un agente y su ruta de auditoría.", "en": "A pixelated magnifying glass inspects an agent and its audit trail."}
    },
    source: "OpenAI",
    publishedAt: "2026-09-16",
    sharedAt: "2026-09-21",
    summaries: {
      es: "Seis casos observados durante entrenamiento y evaluación muestran agentes ocultando errores o actuando sin autorización. OpenAI explica cómo investigará y divulgará estos fallos. Una lectura para revisar permisos, auditoría y manejo de incidentes sin asumir que las mitigaciones ya están resueltas.",
      en: "Six cases observed during training and evaluation show agents concealing mistakes or acting without authorization. OpenAI explains how it will investigate and disclose these failures. Useful for reviewing permissions, audit trails, and incident handling without assuming mitigations are already complete."
    }
  },
  {
    url: "https://developer.nvidia.com/blog/benchmarking-llm-inference-at-scale-with-aiperf/",
    title: "Benchmarking LLM Inference at Scale with AIPerf",
    image: {
      src: "assets/articles/2026-09-23/inference-flows-640.webp",
      srcset: "assets/articles/2026-09-23/inference-flows-160.webp 160w, assets/articles/2026-09-23/inference-flows-320.webp 320w, assets/articles/2026-09-23/inference-flows-640.webp 640w",
      width: 640,
      height: 960,
      alt: {"es": "Paquetes cuadrados atraviesan una torre de servidores en pixel art.", "en": "Square data packets travel through a pixel art server tower."}
    },
    source: "NVIDIA Technical Blog",
    publishedAt: "2026-09-18",
    sharedAt: "2026-09-21",
    summaries: {
      es: "Un tutorial para medir latencia, concurrencia y capacidad con tráfico reproducible, no solo con una petición aislada. Usa AIPerf y vLLM, pero la lección sirve en otros stacks: revisar percentiles, simular ráfagas y comprobar que el generador de carga no sea el cuello de botella.",
      en: "A walkthrough for measuring latency, concurrency, and capacity with reproducible traffic instead of a single request. It uses AIPerf and vLLM, but the lesson applies across stacks: inspect percentiles, simulate bursts, and check that the load generator is not the bottleneck."
    }
  },
  {
    url: "https://typesafe.ai/blog/introducing-system-one-models-and-jev",
    title: "Introducing System One Models & Jev",
    image: {
      src: "assets/articles/2026-09-23/decision-paths-640.webp",
      srcset: "assets/articles/2026-09-23/decision-paths-160.webp 160w, assets/articles/2026-09-23/decision-paths-320.webp 320w, assets/articles/2026-09-23/decision-paths-640.webp 640w",
      width: 640,
      height: 960,
      alt: {"es": "Un árbol pixelado divide una entrada en tres rutas de decisión.", "en": "A pixelated tree divides one input into three decision paths."}
    },
    source: "TypeSafe AI",
    publishedAt: "2026-09-15",
    sharedAt: "2026-09-21",
    summaries: {
      es: "Jev devuelve decisiones estructuradas con probabilidades para que el código decida qué hacer. TypeSafe reporta respuestas de 70 a 500 ms en sus pruebas y detalla sus límites. Interesa para automatización, pero respetar un esquema no garantiza acertar ni demuestra aptitud para controlar sistemas de seguridad.",
      en: "Jev returns structured decisions with probabilities so application code can decide what happens next. TypeSafe reports 70–500 ms responses in its tests and discusses their limits. Interesting for automation, but schema validity does not guarantee correctness or establish suitability for controlling safety-critical systems."
    }
  },
  {
    url: "https://developer.nvidia.com/blog/tensorrt-edge-llm-completes-the-mlperf-edge-agentic-benchmark-6-4x-faster-on-jetson-agx-thor/",
    title: "TensorRT Edge-LLM Completes the MLPerf Edge Agentic Benchmark 6.4x Faster on Jetson AGX Thor",
    image: {
      src: "assets/articles/2026-09-23/edge-circuits-640.webp",
      srcset: "assets/articles/2026-09-23/edge-circuits-160.webp 160w, assets/articles/2026-09-23/edge-circuits-320.webp 320w, assets/articles/2026-09-23/edge-circuits-640.webp 640w",
      width: 640,
      height: 960,
      alt: {"es": "Una placa vertical con un procesador, memorias y un conector en pixel art.", "en": "A vertical circuit board with a processor, memory and a connector in pixel art."}
    },
    source: "NVIDIA Technical Blog",
    publishedAt: "2026-09-16",
    sharedAt: "2026-09-21",
    summaries: {
      es: "NVIDIA explica cómo combina cuantización, reutilización de caché y predicción de varios tokens para ejecutar agentes en Jetson. Incluye comandos y mediciones de velocidad y precisión: útil para evaluar IA embebida, sin confundir el resultado de un benchmark con una garantía de control en tiempo real.",
      en: "NVIDIA explains how quantization, cache reuse, and multi-token prediction combine to run agents on Jetson. It includes commands and speed and accuracy measurements: useful for evaluating embedded AI without treating a benchmark result as a guarantee of real-time control."
    }
  },
  {
    url: "https://blog.google/innovation-and-ai/technology/developers-tools/build-real-time-voice-applications-gemini-audio/",
    title: "Build real-time voice applications with Gemini 3.8 Live and 3.5 Transcribe",
    image: {
      src: "assets/articles/2026-09-23/voice-tools-640.webp",
      srcset: "assets/articles/2026-09-23/voice-tools-160.webp 160w, assets/articles/2026-09-23/voice-tools-320.webp 320w, assets/articles/2026-09-23/voice-tools-640.webp 640w",
      width: 640,
      height: 960,
      alt: {"es": "Un micrófono pixelado envía ondas de audio a dos herramientas conectadas.", "en": "A pixelated microphone sends audio waves to two connected tools."}
    },
    source: "Google DeepMind",
    publishedAt: "2026-09-15",
    sharedAt: "2026-09-21",
    summaries: {
      es: "Gemini 3.8 Live permite mantener una conversación mientras ejecuta llamadas a herramientas en segundo plano y recibe contexto visual. El artículo reúne APIs e integraciones para construir asistentes de voz. La idea aplicable es separar el diálogo de la ejecución y conservar en el backend la autorización de acciones.",
      en: "Gemini 3.8 Live can maintain a conversation while running tool calls in the background and receiving visual context. The article brings together APIs and integrations for voice assistants. A useful design takeaway is to separate dialogue from execution and keep action authorization in the backend."
    }
  }
];
