// Weekly editorial selection. Dates and summaries are plain text.
// publishedAt: verified original date; sharedAt: date shared on CERCO.DEV.
// Images are optional; every referenced asset must exist in assets/articles/.
window.SITE_ARTICLES = [
  {
    "url": "https://openai.com/index/securing-our-frontier-model-training-environment/",
    "title": "Securing our frontier model training environment",
    "source": "OpenAI",
    "publishedAt": "2026-10-23",
    "summaries": {
      "es": "OpenAI cuenta qué falló al contener modelos en entrenamiento y cómo reforzó sus defensas. La lección: probar también qué ocurre después de que un agente escapa de su entorno aislado, con controles de red, monitoreo y paradas automáticas independientes. Es un informe de sus pruebas internas, no una garantía de aislamiento perfecto.",
      "en": "OpenAI describes containment failures during model training and the defenses it strengthened. The useful lesson: also test what happens after an agent escapes its sandbox, with independent network controls, monitoring and automatic stops. This reports internal testing, not a guarantee of perfect isolation."
    },
    "sharedAt": "2026-10-26",
    "image": {
      "src": "assets/articles/2026-10-26/layered-containment-640.webp",
      "srcset": "assets/articles/2026-10-26/layered-containment-160.webp 160w, assets/articles/2026-10-26/layered-containment-320.webp 320w, assets/articles/2026-10-26/layered-containment-640.webp 640w",
      "width": 640,
      "height": 960,
      "alt": {
        "es": "Procesador rodeado por barreras de contención y una palanca de corte.",
        "en": "Processor surrounded by containment barriers and a shutoff lever."
      }
    }
  },
  {
    "url": "https://developer.nvidia.com/blog/using-ai-agents-to-teach-robots-like-microduck-to-walk-in-simulation/",
    "title": "Using AI Agents to Teach Robots Like Microduck to Walk in Simulation",
    "source": "NVIDIA",
    "publishedAt": "2026-10-23",
    "summaries": {
      "es": "Recorre la creación de un circuito de obstáculos, el entrenamiento de locomoción y la evaluación de un robot en Isaac Sim e Isaac Lab. Lo más útil es separar entrenamiento de validación y medir caídas, colisiones y bloqueos. Antes de pasar al robot físico, hay que ajustar sensores, retardos y respuesta de los actuadores; ese despliegue queda fuera de la guía.",
      "en": "Walks through obstacle-course creation, locomotion training and robot evaluation with Isaac Sim and Isaac Lab. The useful pattern is separating training from validation and measuring falls, collisions and stalls. Moving to physical hardware still requires matching sensors, delays and actuator behavior; that deployment is outside the guide's scope."
    },
    "sharedAt": "2026-10-26",
    "image": {
      "src": "assets/articles/2026-10-26/robot-simulation-640.webp",
      "srcset": "assets/articles/2026-10-26/robot-simulation-160.webp 160w, assets/articles/2026-10-26/robot-simulation-320.webp 320w, assets/articles/2026-10-26/robot-simulation-640.webp 640w",
      "width": 640,
      "height": 960,
      "alt": {
        "es": "Robot bípedo con cámaras subiendo un escalón junto a una rampa.",
        "en": "Bipedal camera-equipped robot stepping onto a block beside a ramp."
      }
    }
  },
  {
    "url": "https://openai.com/index/decisions-api/",
    "title": "Build more responsive apps with the Decisions API",
    "source": "OpenAI",
    "publishedAt": "2026-10-22",
    "summaries": {
      "es": "La disponibilidad general añade entradas JSON, caché y hasta 400 preguntas por solicitud a Decisions API. Explica cómo usar probabilidades, opciones y puntuaciones en el flujo de una aplicación: una conexión clara con el enfoque de decisiones que me interesa de Jev. Las estimaciones deben evaluarse con casos propios; no sustituyen permisos ni controles de seguridad.",
      "en": "General availability adds JSON inputs, caching and up to 400 questions per request to the Decisions API. It explains how probabilities, choices and scores fit into application logic—a clear connection to the decision-oriented approach I like in Jev. Evaluate estimates on your own cases; they do not replace permissions or safety controls."
    },
    "sharedAt": "2026-10-26",
    "image": {
      "src": "assets/articles/2026-10-26/typed-decisions-640.webp",
      "srcset": "assets/articles/2026-10-26/typed-decisions-160.webp 160w, assets/articles/2026-10-26/typed-decisions-320.webp 320w, assets/articles/2026-10-26/typed-decisions-640.webp 640w",
      "width": 640,
      "height": 960,
      "alt": {
        "es": "Selector electrónico con una perilla y tres conectores de formas distintas.",
        "en": "Electronic selector with a rotary knob and three differently shaped connectors."
      }
    }
  },
  {
    "url": "https://developers.googleblog.com/bringing-visual-graph-debugging-to-custom-edge-compilers-with-model-explorer/",
    "title": "Bringing Visual Graph Debugging to Custom Edge Compilers with Model Explorer",
    "source": "Google Developers",
    "publishedAt": "2026-10-20",
    "summaries": {
      "es": "Arm muestra cómo inspeccionar un modelo después de compilarlo: encontrar operadores inesperados, comprobar qué llega a la NPU y localizar operaciones costosas. Incluye adaptadores abiertos para probarlo. Una lección práctica para IA en dispositivos: que el modelo funcione no significa que esté aprovechando el acelerador; las trazas de ciclos del ejemplo vienen de un simulador.",
      "en": "Arm shows how to inspect a compiled model: find unexpected operators, check what reaches the NPU and locate expensive operations. Open adapters let you try the workflow. A practical edge-AI lesson: a working model may not be using its accelerator effectively; the example's cycle traces come from a simulator."
    },
    "sharedAt": "2026-10-26",
    "image": {
      "src": "assets/articles/2026-10-26/edge-debugging-640.webp",
      "srcset": "assets/articles/2026-10-26/edge-debugging-160.webp 160w, assets/articles/2026-10-26/edge-debugging-320.webp 320w, assets/articles/2026-10-26/edge-debugging-640.webp 640w",
      "width": 640,
      "height": 960,
      "alt": {
        "es": "Lupa sobre una placa electrónica mostrando bloques de procesamiento conectados.",
        "en": "Magnifying glass over a circuit board revealing connected processing blocks."
      }
    }
  },
  {
    "url": "https://aws.amazon.com/blogs/big-data/trace-security-threats-in-multi-agent-pipelines-with-amazon-opensearch-service/",
    "title": "Trace security threats in multi-agent pipelines with Amazon OpenSearch Service",
    "source": "AWS",
    "publishedAt": "2026-10-19",
    "summaries": {
      "es": "Una demo con código para seguir una inyección de instrucciones entre agentes y detectar fugas entre clientes. Puedes trasladar a tu stack el registro del origen de cada dato y la autorización de herramientas basada en ese origen. Usa Bedrock y OpenSearch; sus detectores sencillos y resultados con datos ficticios no demuestran protección suficiente para producción.",
      "en": "A code-backed demo traces prompt injection across agents and detects cross-tenant leaks. Data provenance and tool authorization based on that provenance are patterns you can take to your own stack. It uses Bedrock and OpenSearch; simple detectors and results on fictional data do not establish production-grade protection."
    },
    "sharedAt": "2026-10-26",
    "image": {
      "src": "assets/articles/2026-10-26/agent-provenance-640.webp",
      "srcset": "assets/articles/2026-10-26/agent-provenance-160.webp 160w, assets/articles/2026-10-26/agent-provenance-320.webp 320w, assets/articles/2026-10-26/agent-provenance-640.webp 640w",
      "width": 640,
      "height": 960,
      "alt": {
        "es": "Cinta conectando bandejas de documentos hasta una compuerta cerrada.",
        "en": "Ribbon connecting document trays to a closed gate."
      }
    }
  }
];
