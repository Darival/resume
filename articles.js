// Weekly editorial selection. Dates and summaries are plain text.
// publishedAt: verified original date; sharedAt: date shared on CERCO.DEV.
// Images are optional; every referenced asset must exist in assets/articles/.
window.SITE_ARTICLES = [
  {
    "url": "https://aws.amazon.com/blogs/publicsector/controlling-delegation-in-agentic-ai-with-amazon-bedrock-agent-core/",
    "title": "Controlling delegation in agentic AI with Amazon Bedrock Agent Core",
    "source": "AWS",
    "publishedAt": "2026-09-25",
    "sharedAt": "2026-09-28",
    "summaries": {
      "es": "Una forma útil de revisar agentes: identificar dónde delegan confianza, acciones y acceso a datos. Aunque parte de AWS, el criterio sirve en cualquier stack: verificar permisos fuera del modelo y probar las consecuencias de una inyección, no solo la respuesta que escribe.",
      "en": "A useful way to review agents: identify where they delegate trust, actions and data access. Although framed around AWS, the principle applies to any stack: enforce permissions outside the model and test what an injection actually changes, not just the text it produces."
    },
    "image": {
      "src": "assets/articles/2026-09-28/delegation-lock-640.webp",
      "srcset": "assets/articles/2026-09-28/delegation-lock-160.webp 160w, assets/articles/2026-09-28/delegation-lock-320.webp 320w, assets/articles/2026-09-28/delegation-lock-640.webp 640w",
      "width": 640,
      "height": 960,
      "alt": {
        "es": "Candado con tres conectores que representan permisos de acceso.",
        "en": "Padlock with three connectors representing access permissions."
      }
    }
  },
  {
    "url": "https://developers.googleblog.com/introducing-support-for-local-ai-models-in-the-antigravity-sdk/",
    "title": "Introducing Support for Local AI Models in the Antigravity SDK",
    "source": "Google for Developers",
    "publishedAt": "2026-09-23",
    "sharedAt": "2026-09-28",
    "summaries": {
      "es": "Ejemplos en Python para ejecutar agentes locales con Gemma y LiteRT, o combinar un planificador en la nube con trabajo en el equipo. Enseña a separar qué datos salen del dispositivo. Recomienda más de 24 GB de memoria; los permisos abiertos del ejemplo requieren revisión antes de producción.",
      "en": "Python examples for local agents using Gemma and LiteRT, or a cloud planner coordinating on-device work. A useful pattern for deciding which data leaves the machine. The guide recommends over 24 GB of memory; its permissive example policies need review before production."
    },
    "image": {
      "src": "assets/articles/2026-09-28/local-workshop-640.webp",
      "srcset": "assets/articles/2026-09-28/local-workshop-160.webp 160w, assets/articles/2026-09-28/local-workshop-320.webp 320w, assets/articles/2026-09-28/local-workshop-640.webp 640w",
      "width": 640,
      "height": 960,
      "alt": {
        "es": "Laptop con un chip y conexiones hacia una nube.",
        "en": "Laptop with a chip and connections to a cloud."
      }
    }
  },
  {
    "url": "https://developer.nvidia.com/blog/accelerating-a-ros-2-node-with-an-ai-agent-and-nvidia-isaac-ros/",
    "title": "Accelerating a ROS 2 Node with an AI Agent and NVIDIA Isaac ROS",
    "source": "NVIDIA",
    "publishedAt": "2026-09-22",
    "sharedAt": "2026-09-28",
    "summaries": {
      "es": "Una guía con código para optimizar un nodo de percepción robótica sin cambiar sus mensajes ROS 2. Lo importante no es solo acelerar el modelo: también hay que medir las copias CPU–GPU, comprobar el transporte y conservar la ruta CPU cuando no se cumplen los requisitos de CUDA.",
      "en": "A code-based guide to optimizing a robotic perception node without changing its ROS 2 messages. Faster inference is only part of the job: measure CPU–GPU copies, verify the transport and retain the CPU fallback when CUDA requirements are not met."
    },
    "image": {
      "src": "assets/articles/2026-09-28/robot-vision-640.webp",
      "srcset": "assets/articles/2026-09-28/robot-vision-160.webp 160w, assets/articles/2026-09-28/robot-vision-320.webp 320w, assets/articles/2026-09-28/robot-vision-640.webp 640w",
      "width": 640,
      "height": 960,
      "alt": {
        "es": "Brazo robótico con cámara y un chip en su base.",
        "en": "Robotic arm with a camera and a chip in its base."
      }
    }
  },
  {
    "url": "https://openai.com/index/better-prompt-caching-for-gpt-6/",
    "title": "Better prompt caching for GPT‑6",
    "source": "OpenAI",
    "publishedAt": "2026-09-22",
    "sharedAt": "2026-09-28",
    "summaries": {
      "es": "Cómo revisar por qué un agente pierde la caché y organizar instrucciones y herramientas para reutilizar contexto. Incluye diagnóstico, puntos de corte y precalentamiento. Los controles son propios de GPT-6; mantener estable el contexto compartido y medir los fallos de caché es una lección aplicable a otras integraciones.",
      "en": "How to diagnose an agent's cache misses and arrange instructions and tools to reuse context. Covers diagnostics, breakpoints and prewarming. The controls are specific to GPT-6; keeping shared context stable and measuring cache misses is a useful lesson for other integrations too."
    },
    "image": {
      "src": "assets/articles/2026-09-28/prompt-cache-640.webp",
      "srcset": "assets/articles/2026-09-28/prompt-cache-160.webp 160w, assets/articles/2026-09-28/prompt-cache-320.webp 320w, assets/articles/2026-09-28/prompt-cache-640.webp 640w",
      "width": 640,
      "height": 960,
      "alt": {
        "es": "Módulos de memoria con un conducto de retorno.",
        "en": "Memory modules with a return chute."
      }
    }
  },
  {
    "url": "https://www.edgeimpulse.com/blog/qualcomm-technologies-first-risc-v-silicon-qcc744m-evk-supported-on-edge-impulse-and-zephyr/",
    "title": "Qualcomm Technologies' First RISC-V Silicon: QCC744M-EVK, Supported on Edge Impulse and Zephyr",
    "source": "Edge Impulse",
    "publishedAt": "2026-09-21",
    "sharedAt": "2026-09-28",
    "summaries": {
      "es": "Un recorrido de sensor a inferencia local con Zephyr: IMU por I2C, botones, LEDs y firmware abierto. Incluye compilación, flasheo y comandos para capturar datos y ejecutar el modelo. Una base concreta para experimentar con electrónica e IA, y adaptarla a otros sensores sin depender de la nube.",
      "en": "A sensor-to-local-inference walkthrough with Zephyr: an I2C IMU, buttons, LEDs and open firmware. Includes building, flashing and commands for data collection and inference. A concrete starting point for experimenting with electronics and AI, then adapting it to other sensors without depending on the cloud."
    },
    "image": {
      "src": "assets/articles/2026-09-28/sensor-board-640.webp",
      "srcset": "assets/articles/2026-09-28/sensor-board-160.webp 160w, assets/articles/2026-09-28/sensor-board-320.webp 320w, assets/articles/2026-09-28/sensor-board-640.webp 640w",
      "width": 640,
      "height": 960,
      "alt": {
        "es": "Sensor conectado a una placa con botones y luces.",
        "en": "Sensor connected to a board with buttons and lights."
      }
    }
  }
];
