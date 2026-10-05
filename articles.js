// Weekly editorial selection. Dates and summaries are plain text.
// publishedAt: verified original date; sharedAt: date shared on CERCO.DEV.
// Images are optional; every referenced asset must exist in assets/articles/.
window.SITE_ARTICLES = [
  {
    "url": "https://developer.nvidia.com/blog/build-local-ai-apps-with-c-and-nvidia-tensorrt-rtx-samples/",
    "title": "Build Local AI Apps with C++ and NVIDIA TensorRT RTX Samples",
    "source": "NVIDIA",
    "publishedAt": "2026-10-01",
    "summaries": {
      "es": "Ejemplos en C++ para llevar modelos ONNX a aplicaciones locales de visión y transcripción. La separación entre exportar el modelo y ejecutar la aplicación es reutilizable; TensorRT RTX aporta la aceleración específica de NVIDIA. Incluye código y compilación para Windows, Linux y Arm64.",
      "en": "C++ examples for turning ONNX models into local vision and transcription applications. Separating model export from application execution is reusable; TensorRT RTX supplies NVIDIA-specific acceleration. Includes code and build presets for Windows, Linux and Arm64."
    },
    "sharedAt": "2026-10-05",
    "image": {
      "src": "assets/articles/2026-10-05/native-inference-640.webp",
      "srcset": "assets/articles/2026-10-05/native-inference-160.webp 160w, assets/articles/2026-10-05/native-inference-320.webp 320w, assets/articles/2026-10-05/native-inference-640.webp 640w",
      "width": 640,
      "height": 960,
      "alt": {
        "es": "Computadora con una hoja en pantalla conectada a un procesador.",
        "en": "Computer displaying a leaf, connected to a processor."
      }
    }
  },
  {
    "url": "https://aws.amazon.com/blogs/opensource/introducing-the-dogwood-local-engine-temporal-governance-for-agent-actions/",
    "title": "Introducing the Dogwood Local Engine: temporal governance for agent actions",
    "source": "AWS",
    "publishedAt": "2026-09-30",
    "summaries": {
      "es": "Permisos que dependen de lo que el agente hizo antes: por ejemplo, permitir un push solo después de pruebas recientes y exitosas. El motor abierto conserva el historial tras reinicios. Se puede integrar fuera de AWS, pero tu aplicación debe bloquear las acciones denegadas y proteger el registro; la biblioteca no aísla al agente por sí sola.",
      "en": "Permissions that depend on what an agent did earlier: for example, allowing a push only after recent successful tests. The open-source engine preserves history across restarts. It can be integrated outside AWS, but your application must block denied actions and protect the event log; the library does not isolate the agent by itself."
    },
    "sharedAt": "2026-10-05",
    "image": {
      "src": "assets/articles/2026-10-05/temporal-gate-640.webp",
      "srcset": "assets/articles/2026-10-05/temporal-gate-160.webp 160w, assets/articles/2026-10-05/temporal-gate-320.webp 320w, assets/articles/2026-10-05/temporal-gate-640.webp 640w",
      "width": 640,
      "height": 960,
      "alt": {
        "es": "Reloj de arena sobre una barrera y tres bloques de historial.",
        "en": "Hourglass above a barrier and three history blocks."
      }
    }
  },
  {
    "url": "https://openai.com/index/devday-2026-recap/",
    "title": "DevDay 2026 Recap",
    "source": "OpenAI",
    "publishedAt": "2026-09-29",
    "summaries": {
      "es": "Dentro del resumen de DevDay, destaca Decisions API: usar Luna para elegir entre respuestas predefinidas a partir de texto o imágenes, en vez de pedir una respuesta abierta. Es otra interfaz para clasificar y dirigir software. Se anunció en acceso limitado; el artículo no demuestra probabilidades calibradas ni garantías para controlar sistemas físicos.",
      "en": "Within the DevDay recap, Decisions API stands out: using Luna to choose predefined answers from text or images instead of requesting an open-ended response. It offers another interface for classification and software routing. It was announced in limited preview; the article does not establish calibrated probabilities or guarantees for controlling physical systems."
    },
    "sharedAt": "2026-10-05",
    "image": {
      "src": "assets/articles/2026-10-05/finite-decisions-640.webp",
      "srcset": "assets/articles/2026-10-05/finite-decisions-160.webp 160w, assets/articles/2026-10-05/finite-decisions-320.webp 320w, assets/articles/2026-10-05/finite-decisions-640.webp 640w",
      "width": 640,
      "height": 960,
      "alt": {
        "es": "Tolva con una palanca que dirige bloques hacia tres bandejas.",
        "en": "Hopper with a lever routing blocks into three trays."
      }
    }
  },
  {
    "url": "https://developer.nvidia.com/blog/lower-the-cost-of-building-and-running-visual-ai-agents-with-nvidia-vss-blueprint-3-3/",
    "title": "Lower the Cost of Building and Running Visual AI Agents with NVIDIA VSS Blueprint 3.3",
    "source": "NVIDIA",
    "publishedAt": "2026-09-29",
    "summaries": {
      "es": "Cómo conectar cámaras RTSP, verificación de alertas, búsqueda y reportes sin duplicar servicios. VSS 3.3 también evita procesar partes del video que no cambian. El patrón sirve para monitoreo industrial, pero usa el stack de NVIDIA: hay que medir precisión y latencia con video propio. El derrame mostrado es una demo sintética, no una validación de seguridad.",
      "en": "How to connect RTSP cameras, alert verification, search and reporting without duplicating services. VSS 3.3 also skips processing unchanged video regions. The pattern is useful for industrial monitoring but uses NVIDIA's stack: test accuracy and latency on your own footage. The illustrated spill is a synthetic demo, not a safety validation."
    },
    "sharedAt": "2026-10-05",
    "image": {
      "src": "assets/articles/2026-10-05/camera-events-640.webp",
      "srcset": "assets/articles/2026-10-05/camera-events-160.webp 160w, assets/articles/2026-10-05/camera-events-320.webp 320w, assets/articles/2026-10-05/camera-events-640.webp 640w",
      "width": 640,
      "height": 960,
      "alt": {
        "es": "Cámara industrial observando botellas en una banda transportadora.",
        "en": "Industrial camera watching bottles on a conveyor belt."
      }
    }
  },
  {
    "url": "https://aws.amazon.com/blogs/industries/reduce-smt-defects-with-agentic-ai-automating-polarity-validation-on-aws/",
    "title": "Reduce SMT Defects with Agentic AI: Automating Polarity Validation on AWS",
    "source": "AWS",
    "publishedAt": "2026-09-28",
    "summaries": {
      "es": "Un prototipo para extraer dimensiones y polaridad de fichas técnicas antes del montaje de componentes. Explica por qué falló buscar páginas similares y cómo ayudó aislar las vistas del dibujo. Aunque usa Textract y Bedrock, puedes trasladar el filtrado, la validación y las correcciones del ingeniero a otro stack. La confianza declarada por el modelo no garantiza una extracción correcta.",
      "en": "A prototype for extracting dimensions and polarity from datasheets before component assembly. It explains why similar-page retrieval failed and how isolating drawing views helped. Although it uses Textract and Bedrock, filtering, validation and engineer corrections can transfer to another stack. A model's self-reported confidence does not guarantee a correct extraction."
    },
    "sharedAt": "2026-10-05",
    "image": {
      "src": "assets/articles/2026-10-05/component-inspection-640.webp",
      "srcset": "assets/articles/2026-10-05/component-inspection-160.webp 160w, assets/articles/2026-10-05/component-inspection-320.webp 320w, assets/articles/2026-10-05/component-inspection-640.webp 640w",
      "width": 640,
      "height": 960,
      "alt": {
        "es": "Lupa sobre un diodo junto a una placa y una cinta de componentes.",
        "en": "Magnifying glass over a diode beside a circuit board and component tape."
      }
    }
  }
];
