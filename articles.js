// Weekly editorial selection. Dates and summaries are plain text.
// publishedAt: verified original date; sharedAt: date shared on CERCO.DEV.
// Images are optional; every referenced asset must exist in assets/articles/.
window.SITE_ARTICLES = [
  {
    "url": "https://api-docs.deepseek.com/updates/#date-2026-11-13",
    "title": "Releasing the full suite of application APIs",
    "source": "DeepSeek",
    "publishedAt": "2026-11-13",
    "sharedAt": "2026-11-17",
    "summaries": {
      "es": "DeepSeek abre búsqueda web, lectura de enlaces, archivos y voz mediante sus APIs, con un cliente de ejemplo abierto. La guía enseña a conservar los bloques de herramientas entre turnos y renderizar citas. Es una ruta concreta para integrar estas funciones; el cliente de demostración no equivale a una aplicación lista para producción.",
      "en": "DeepSeek opens web search, URL reading, files and voice through its APIs, with an open-source example client. The guide explains preserving tool blocks across turns and rendering citations. A concrete integration path; the demonstration client is not a production-ready application."
    },
    "image": {
      "src": "assets/articles/2026-11-17/connected-tools-640.webp",
      "srcset": "assets/articles/2026-11-17/connected-tools-160.webp 160w, assets/articles/2026-11-17/connected-tools-320.webp 320w, assets/articles/2026-11-17/connected-tools-640.webp 640w",
      "width": 640,
      "height": 960,
      "alt": {
        "es": "Un concentrador electrónico conecta un globo, un documento y un altavoz.",
        "en": "An electronic hub connecting a globe, a document and a speaker."
      }
    }
  },
  {
    "url": "https://developer.nvidia.com/blog/adapt-human-motion-for-robots-with-nvidia-soma-retargeter/",
    "title": "Adapt Human Motion for Robots with NVIDIA SOMA Retargeter",
    "source": "NVIDIA",
    "publishedAt": "2026-11-13",
    "sharedAt": "2026-11-17",
    "summaries": {
      "es": "Una guía con código abierto para adaptar movimientos humanos a las proporciones y articulaciones de un robot. Recorre configuración, cinemática inversa y corrección de apoyos, hasta preparar datos para entrenar controladores. La lección transferible es separar la trayectoria deseada del control físico y evaluar equilibrio, contactos y límites de actuadores en simulación.",
      "en": "An open-source guide to adapting human motion to a robot’s proportions and joints. It covers configuration, inverse kinematics and foot-contact correction, then prepares data for controller training. The transferable lesson is to separate desired trajectories from physical control and evaluate balance, contacts and actuator limits in simulation."
    },
    "image": {
      "src": "assets/articles/2026-11-17/robot-motion-640.webp",
      "srcset": "assets/articles/2026-11-17/robot-motion-160.webp 160w, assets/articles/2026-11-17/robot-motion-320.webp 320w, assets/articles/2026-11-17/robot-motion-640.webp 640w",
      "width": 640,
      "height": 960,
      "alt": {
        "es": "Un robot articulado imita la postura de una pequeña figura humana detrás de él.",
        "en": "A jointed robot matching the pose of a smaller human figure behind it."
      }
    }
  },
  {
    "url": "https://developers.googleblog.com/how-agent-anomaly-detection-scores-on-benchmarks-we-didnt-write/",
    "title": "How Agent Anomaly Detection scores on benchmarks we didn't write",
    "source": "Google Developers",
    "publishedAt": "2026-11-12",
    "sharedAt": "2026-11-17",
    "summaries": {
      "es": "Google evalúa su detector con pruebas públicas y explica sus puntos ciegos, especialmente la memoria contaminada y las falsas alarmas. La lección es separar detección posterior de bloqueo previo y medir ambas. El estudio usa un modelo y aplicaciones simuladas; el servicio sigue en vista previa privada y no detiene acciones.",
      "en": "Google evaluates its detector on public tests and explains blind spots, especially poisoned memory and false alarms. The lesson is to measure post-execution detection separately from preventive blocking. The study uses one model and simulated apps; the service remains in private preview and does not stop actions."
    }
  },
  {
    "url": "https://aws.amazon.com/blogs/machine-learning/from-prototype-to-production-engineering-agents-with-agent-dlc/",
    "title": "From prototype to production: Engineering agents with Agent DLC",
    "source": "AWS",
    "publishedAt": "2026-11-12",
    "sharedAt": "2026-11-17",
    "summaries": {
      "es": "Una guía con repositorio para definir criterios de aceptación, repetir evaluaciones y convertir fallas en mejoras verificables. Su asistente de ejemplo muestra cómo una buena puntuación puede ocultar información faltante. Puedes adaptar el ciclo a tu stack: cambiar una cosa, revisar la evidencia y volver a evaluar; la implementación usa Bedrock AgentCore.",
      "en": "A repository-backed guide to acceptance criteria, repeated evaluations and verifiable improvements. Its example assistant shows how a strong score can hide missing information. Adapt the cycle to your stack: change one thing, inspect the evidence and evaluate again; the implementation uses Bedrock AgentCore."
    },
    "image": {
      "src": "assets/articles/2026-11-17/release-workbench-640.webp",
      "srcset": "assets/articles/2026-11-17/release-workbench-160.webp 160w, assets/articles/2026-11-17/release-workbench-320.webp 320w, assets/articles/2026-11-17/release-workbench-640.webp 640w",
      "width": 640,
      "height": 960,
      "alt": {
        "es": "Un módulo pasa por un banco de pruebas con una cinta que regresa al inicio.",
        "en": "A module passing through a test bench with a conveyor returning to the start."
      }
    }
  },
  {
    "url": "https://developers.googleblog.com/catch-go-bugs-that-fuzzing-misses-with-gemini-and-a-constraint-solver/",
    "title": "Catch Go bugs that fuzzing misses with Gemini and a constraint solver",
    "source": "Google Developers",
    "publishedAt": "2026-11-12",
    "sharedAt": "2026-11-17",
    "summaries": {
      "es": "Combina Gemini, ensamblador y Z3 para buscar entradas que provocan errores en Go, y luego las ejecuta con go test. Enseña una forma útil de unir IA con verificación independiente. Un resultado sin fallas en el modelo del solver no demuestra que el programa sea correcto; también explica cómo mejorar el fuzzing.",
      "en": "Combines Gemini, assembly and Z3 to find inputs that trigger Go errors, then executes them with go test. A useful way to pair AI with independent verification. A solver model without a failing case does not prove program correctness; the article also explains how to improve fuzzing."
    },
    "image": {
      "src": "assets/articles/2026-11-17/bug-reproducer-640.webp",
      "srcset": "assets/articles/2026-11-17/bug-reproducer-160.webp 160w, assets/articles/2026-11-17/bug-reproducer-320.webp 320w, assets/articles/2026-11-17/bug-reproducer-640.webp 640w",
      "width": 640,
      "height": 960,
      "alt": {
        "es": "Dos piezas encajadas sostienen un pequeño insecto mecánico sobre un zócalo de pruebas.",
        "en": "Two interlocking pieces holding a small mechanical bug above a test socket."
      }
    }
  }
];
