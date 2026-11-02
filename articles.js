// Weekly editorial selection. Dates and summaries are plain text.
// publishedAt: verified original date; sharedAt: date shared on CERCO.DEV.
// Images are optional; every referenced asset must exist in assets/articles/.
window.SITE_ARTICLES = [
  {
    "url": "https://developer.nvidia.com/blog/run-ai-models-for-edge-application-development-with-just-a-few-commands/",
    "title": "Run AI Models for Edge Application Development with Just a Few Commands",
    "source": "NVIDIA",
    "publishedAt": "2026-10-30",
    "summaries": {
      "es": "Una guía para levantar un modelo local, exponer una API y probar decodificación especulativa con TensorRT Edge-LLM. Incluye comandos y requisitos concretos para DGX Spark. Sirve para aprender el flujo de prototipado antes del despliegue embebido; sus mediciones corresponden a ese equipo y no prueban control seguro de dispositivos.",
      "en": "A guide to running a local model, exposing an API and trying speculative decoding with TensorRT Edge-LLM. It includes commands and concrete DGX Spark requirements. Useful for learning the prototyping workflow before embedded deployment; its measurements apply to that machine and do not establish safe device control."
    },
    "sharedAt": "2026-11-02",
    "image": {
      "src": "assets/articles/2026-11-02/local-inference-640.webp",
      "srcset": "assets/articles/2026-11-02/local-inference-160.webp 160w, assets/articles/2026-11-02/local-inference-320.webp 320w, assets/articles/2026-11-02/local-inference-640.webp 640w",
      "width": 640,
      "height": 960,
      "alt": {
        "es": "Mini computadora con ventilador, procesador y un conector grande en su base.",
        "en": "Mini computer with a fan, processor and a large connector at its base."
      }
    }
  },
  {
    "url": "https://aws.amazon.com/blogs/machine-learning/managing-amazon-bedrock-costs-end-to-end-a-playbook-for-finops-and-platform-teams/",
    "title": "Managing Amazon Bedrock costs end to end: A playbook for FinOps and platform teams",
    "source": "AWS",
    "publishedAt": "2026-10-30",
    "summaries": {
      "es": "Cinco pasos para operar los costos de IA: atribuir, observar, limitar, optimizar y revisar. Lo adaptable a cualquier stack es registrar quién consume cada tarea y distinguir una alerta de un bloqueo efectivo. Los ejemplos usan Bedrock e IAM; los umbrales de gasto deben ajustarse con datos propios.",
      "en": "Five steps for operating AI costs: attribute, observe, enforce, optimize and review. The transferable lesson is tracking who consumes each task and distinguishing an alert from an effective block. Examples use Bedrock and IAM; spending thresholds need calibration against your own data."
    },
    "sharedAt": "2026-11-02",
    "image": {
      "src": "assets/articles/2026-11-02/cost-controls-640.webp",
      "srcset": "assets/articles/2026-11-02/cost-controls-160.webp 160w, assets/articles/2026-11-02/cost-controls-320.webp 320w, assets/articles/2026-11-02/cost-controls-640.webp 640w",
      "width": 640,
      "height": 960,
      "alt": {
        "es": "Tolva de fichas conectada a un medidor y una válvula de paso.",
        "en": "Token hopper connected to a meter and a flow-control valve."
      }
    }
  },
  {
    "url": "https://openai.com/index/how-we-detect-frontier-model-misalignment/",
    "title": "How we detect frontier model misalignment",
    "source": "OpenAI",
    "publishedAt": "2026-10-29",
    "summaries": {
      "es": "OpenAI explica cómo combina revisores, agentes investigadores y telemetría para detectar acciones no autorizadas. Lo útil es separar detección, investigación e intervención, y probar también lo que el monitor deja pasar. Describe límites de cobertura y falsas alarmas: monitorear no equivale a detener automáticamente todas las acciones.",
      "en": "OpenAI explains how reviewers, investigative agents and telemetry detect unauthorized actions. The useful pattern separates detection, investigation and intervention, and tests what the monitor misses. It describes coverage limits and false alarms: monitoring does not mean automatically stopping every action."
    },
    "sharedAt": "2026-11-02",
    "image": {
      "src": "assets/articles/2026-11-02/agent-monitoring-640.webp",
      "srcset": "assets/articles/2026-11-02/agent-monitoring-160.webp 160w, assets/articles/2026-11-02/agent-monitoring-320.webp 320w, assets/articles/2026-11-02/agent-monitoring-640.webp 640w",
      "width": 640,
      "height": 960,
      "alt": {
        "es": "Tres lentes de inspección conectadas a un interruptor sobre un cable de datos.",
        "en": "Three inspection lenses connected to a switch above a data cable."
      }
    }
  },
  {
    "url": "https://developers.googleblog.com/fast-reliable-a2ui/",
    "title": "Fast, reliable A2UI, with swappable inference formats",
    "source": "Google Developers",
    "publishedAt": "2026-10-27",
    "summaries": {
      "es": "A2UI muestra una aplicación concreta de Jev: elegir estructuras conocidas y dejar que el código arme la interfaz. Incluye un repositorio y lo compara con generar un formato compacto que después se compila. Las pruebas de Jev cubren solo 11 ejemplos; la generación controlada queda limitada a las estructuras definidas.",
      "en": "A2UI shows a concrete Jev application: choose known structures and let code assemble the interface. It links a repository and contrasts this with generating a compact format that is then compiled. The Jev tests cover only 11 examples; controlled generation is limited to predefined structures."
    },
    "sharedAt": "2026-11-02",
    "image": {
      "src": "assets/articles/2026-11-02/decision-built-ui-640.webp",
      "srcset": "assets/articles/2026-11-02/decision-built-ui-160.webp 160w, assets/articles/2026-11-02/decision-built-ui-320.webp 320w, assets/articles/2026-11-02/decision-built-ui-640.webp 640w",
      "width": 640,
      "height": 960,
      "alt": {
        "es": "Piezas geométricas encajando en un panel vertical con espacios definidos.",
        "en": "Geometric pieces fitting into a vertical panel with predefined slots."
      }
    }
  },
  {
    "url": "https://www.anthropic.com/research/agents-judgment-calls",
    "title": "How AI agents shape experts’ judgment calls",
    "source": "Anthropic",
    "publishedAt": "2026-10-27",
    "summaries": {
      "es": "Un estudio con 50 analistas muestra cómo las preferencias asignadas a Claude Code influyeron en sus decisiones, incluso cuando las consideraban propias. Invita a revisar qué tan independiente es la supervisión humana. Es un experimento con una tarea ficticia y preferencias reforzadas deliberadamente, no una medida de todos los usos de IA.",
      "en": "A study with 50 analysts shows how preferences assigned to Claude Code influenced decisions they often considered their own. It prompts a closer look at the independence of human oversight. This is an experiment with a fictional task and deliberately strengthened preferences, not a measurement of all AI use."
    },
    "sharedAt": "2026-11-02",
    "image": {
      "src": "assets/articles/2026-11-02/human-judgment-640.webp",
      "srcset": "assets/articles/2026-11-02/human-judgment-160.webp 160w, assets/articles/2026-11-02/human-judgment-320.webp 320w, assets/articles/2026-11-02/human-judgment-640.webp 640w",
      "width": 640,
      "height": 960,
      "alt": {
        "es": "Una mano humana y una pinza mecánica junto a una balanza de dos platos.",
        "en": "A human hand and a mechanical gripper beside a two-pan balance."
      }
    }
  }
];
