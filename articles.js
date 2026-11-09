// Weekly editorial selection. Dates and summaries are plain text.
// publishedAt: verified original date; sharedAt: date shared on CERCO.DEV.
// Images are optional; every referenced asset must exist in assets/articles/.
window.SITE_ARTICLES = [
  {
    "url": "https://openai.com/index/introducing-gpt-6-cyber/",
    "title": "GPT‑6 Cyber: Advancing the frontier of aligned cybersecurity agents",
    "source": "OpenAI",
    "publishedAt": "2026-11-05",
    "sharedAt": "2026-11-09",
    "summaries": {
      "es": "OpenAI presenta un modelo para investigar vulnerabilidades y detalla cómo evalúa que respete el alcance autorizado. Lo interesante son los controles que lo acompañan: monitoreo, restricciones de acceso y revisión de acciones. Los resultados proceden de sus evaluaciones; el acceso inicial está limitado a clientes aprobados de Daybreak Red.",
      "en": "OpenAI introduces a vulnerability-research model and explains how it tests adherence to authorized scope. The useful part is the surrounding controls: monitoring, access restrictions and action review. Results come from its evaluations; initial access is limited to approved Daybreak Red customers."
    },
    "image": {
      "src": "assets/articles/2026-11-09/bounded-security-640.webp",
      "srcset": "assets/articles/2026-11-09/bounded-security-160.webp 160w, assets/articles/2026-11-09/bounded-security-320.webp 320w, assets/articles/2026-11-09/bounded-security-640.webp 640w",
      "width": 640,
      "height": 960,
      "alt": {
        "es": "Escudo con un pequeño procesador dentro de un recinto y una puerta cerrada.",
        "en": "Shield holding a small processor inside an enclosure with a closed gate."
      }
    }
  },
  {
    "url": "https://arxiv.org/abs/2611.06039",
    "title": "Securing Web Agents with the Compile-Then-Execute Paradigm",
    "source": "Baya · arXiv",
    "publishedAt": "2026-11-04",
    "sharedAt": "2026-11-09",
    "summaries": {
      "es": "Baya compila la tarea en un programa antes de leer la web y confina el contenido externo a datos. Ofrece código y una forma concreta de reducir inyecciones de instrucciones. El estudio requiere APIs preparadas por sitio y no cubre la manipulación de resultados: su ausencia de ataques exitosos se limita a las pruebas realizadas.",
      "en": "Baya compiles the task into a program before reading the web and confines external content to data. It provides code and a concrete approach to reducing prompt injection. The study requires prepared site APIs and excludes outcome manipulation: its absence of successful attacks applies only to the tests performed."
    },
    "image": {
      "src": "assets/articles/2026-11-09/compiled-plan-640.webp",
      "srcset": "assets/articles/2026-11-09/compiled-plan-160.webp 160w, assets/articles/2026-11-09/compiled-plan-320.webp 320w, assets/articles/2026-11-09/compiled-plan-640.webp 640w",
      "width": 640,
      "height": 960,
      "alt": {
        "es": "Una hoja rígida con una ruta de bloques entra en una máquina con rodillos.",
        "en": "A rigid sheet with a block path entering a roller machine."
      }
    }
  },
  {
    "url": "https://typesafe.ai/blog/dont-call-it-a-decision-model",
    "title": "Don’t Call It a Decision Model",
    "source": "TypeSafe AI",
    "publishedAt": "2026-11-03",
    "sharedAt": "2026-11-09",
    "summaries": {
      "es": "TypeSafe descompone una decisión en juicios pequeños de Jev, datos conocidos y reglas escritas en código. El ejemplo de atención al cliente enseña a rastrear si falló el juicio del modelo o la lógica de la aplicación. Una explicación útil para automatizaciones observables, sin presentar al modelo como sustituto de las reglas del negocio.",
      "en": "TypeSafe breaks a decision into small Jev judgments, known facts and rules written in code. Its customer-support example shows how to trace a failure to either a model judgment or application logic. A useful explanation for observable automation, without treating the model as a replacement for business rules."
    },
    "image": {
      "src": "assets/articles/2026-11-09/judgment-and-code-640.webp",
      "srcset": "assets/articles/2026-11-09/judgment-and-code-160.webp 160w, assets/articles/2026-11-09/judgment-and-code-320.webp 320w, assets/articles/2026-11-09/judgment-and-code-640.webp 640w",
      "width": 640,
      "height": 960,
      "alt": {
        "es": "Dos módulos electrónicos distintos unidos a una compuerta mecánica.",
        "en": "Two distinct electronic modules connected to a mechanical gate."
      }
    }
  },
  {
    "url": "https://aws.amazon.com/blogs/machine-learning/build-efficient-agents-with-knowledge-distillation-on-amazon-sagemaker-ai/",
    "title": "Build efficient agents with knowledge distillation on Amazon SageMaker AI",
    "source": "AWS",
    "publishedAt": "2026-11-02",
    "sharedAt": "2026-11-09",
    "summaries": {
      "es": "Una guía con código para entrenar un agente pequeño usando recorridos exitosos de otro modelo. Lo transferible es filtrar los ejemplos, separar los datos por problema y evaluar también las capacidades que se pierden. Usa Bedrock y SageMaker; mejorar en compras no garantiza conservar el seguimiento general de instrucciones.",
      "en": "A code-backed guide to training a small agent on another model’s successful trajectories. The transferable lessons are filtering examples, splitting data by problem and evaluating capabilities that may regress. It uses Bedrock and SageMaker; better shopping performance does not guarantee preserved general instruction following."
    },
    "image": {
      "src": "assets/articles/2026-11-09/agent-distillation-640.webp",
      "srcset": "assets/articles/2026-11-09/agent-distillation-160.webp 160w, assets/articles/2026-11-09/agent-distillation-320.webp 320w, assets/articles/2026-11-09/agent-distillation-640.webp 640w",
      "width": 640,
      "height": 960,
      "alt": {
        "es": "Un recipiente grande transfiere bloques a un recipiente pequeño a través de un tamiz.",
        "en": "A large vessel transferring blocks through a sieve into a smaller vessel."
      }
    }
  },
  {
    "url": "https://arxiv.org/abs/2611.03392",
    "title": "TinyML Hits the Memory Wall: A Benchmark of Ten Sub-Watt Edge Devices",
    "source": "TinyML · arXiv",
    "publishedAt": "2026-11-02",
    "sharedAt": "2026-11-09",
    "summaries": {
      "es": "Compara diez dispositivos y explica por qué mover memoria puede pesar más que contar operaciones al elegir un modelo para una NPU. Incluye herramientas de despliegue y métodos de medición. Es una prepublicación con cargas concretas y energía medida en seis equipos: sirve para diseñar pruebas propias, no para declarar un chip ganador universal.",
      "en": "Compares ten devices and explains why memory traffic can matter more than operation counts when choosing a model for an NPU. It details deployment tools and measurement methods. This preprint uses specific workloads and measures energy on six devices: a basis for your own tests, not a universal chip ranking."
    },
    "image": {
      "src": "assets/articles/2026-11-09/memory-bottleneck-640.webp",
      "srcset": "assets/articles/2026-11-09/memory-bottleneck-160.webp 160w, assets/articles/2026-11-09/memory-bottleneck-320.webp 320w, assets/articles/2026-11-09/memory-bottleneck-640.webp 640w",
      "width": 640,
      "height": 960,
      "alt": {
        "es": "Un módulo de memoria y un procesador conectados por un canal estrecho de bloques.",
        "en": "A memory module and processor connected by a narrow channel of blocks."
      }
    }
  }
];
