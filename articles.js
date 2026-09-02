/**
 * Add recommendations using this shape:
 * url, title, source, sharedAt, summaries.es, summaries.en.
 * Keep the published title unchanged and write both summaries in your own words.
 */
window.SITE_ARTICLES = [
  {
    url: "https://openai.com/index/improving-gpt-5-6-sol-in-chatgpt/",
    title: "Improving GPT‑5.6 Sol in ChatGPT—and expanding access to GPT-5.6 Luna for free users",
    source: "OpenAI",
    sharedAt: "2026-09-02",
    summaries: {
      es: "Una actualización enfocada en la experiencia diaria: GPT‑5.6 Sol ofrece respuestas más precisas y directas, mientras Luna amplía el acceso gratuito. Me interesa especialmente el control explícito del esfuerzo de razonamiento.",
      en: "An update focused on everyday use: GPT‑5.6 Sol delivers more accurate, direct answers while Luna expands free access. I am especially interested in the explicit control over reasoning effort."
    }
  },
  {
    url: "https://blog.google/innovation-and-ai/technology/developers-tools/build-with-gemini-omni-1-1-flash/",
    title: "Gemini Omni 1.1 Flash lets you build with more control",
    source: "Google DeepMind",
    sharedAt: "2026-09-02",
    summaries: {
      es: "Google lleva Omni 1.1 Flash a producción con extensión de escenas, interpolación entre fotogramas, previsualización a 360p y salida 4K mediante API. Una referencia útil para crear flujos de video generativo con mayor control de costo e iteración.",
      en: "Google takes Omni 1.1 Flash to production with scene extension, frame interpolation, 360p previews, and 4K output through its API. A useful reference for building generative video workflows with tighter control over cost and iteration."
    }
  },
  {
    url: "https://api-docs.deepseek.com/news/news260813/",
    title: "DeepSeek-V4-Pro GA Release",
    source: "DeepSeek",
    sharedAt: "2026-09-02",
    summaries: {
      es: "V4-Pro refuerza los flujos con agentes, añade niveles de esfuerzo de razonamiento y soporte nativo para Responses API. El nuevo esquema de tarifas pico y valle también importa al diseñar automatizaciones sensibles al costo.",
      en: "V4-Pro strengthens agent workflows, adds reasoning-effort levels, and supports the Responses API natively. Its new peak and off-peak pricing also matters when designing cost-sensitive automations."
    }
  },
  {
    url: "https://www.anthropic.com/news/model-hardware-standard-research-preview",
    title: "Previewing the Model Hardware Standard",
    source: "Anthropic",
    sharedAt: "2026-09-02",
    summaries: {
      es: "Anthropic propone MHS como interfaz común para que Claude descubra y opere hardware programable. Los casos de laboratorio, robótica y Raspberry Pi muestran tanto el potencial como los límites de conectar agentes con el mundo físico.",
      en: "Anthropic proposes MHS as a common interface for Claude to discover and operate programmable hardware. Examples spanning labs, robotics, and Raspberry Pi show both the promise and the limits of connecting agents to the physical world."
    }
  },
  {
    url: "https://developer.nvidia.com/blog/post-train-nvidia-cosmos-3-edge-for-on-device-robot-control/",
    title: "Post-Train NVIDIA Cosmos 3 Edge for On-Device Robot Control",
    source: "NVIDIA Technical Blog",
    sharedAt: "2026-09-02",
    summaries: {
      es: "Un tutorial reproducible para posentrenar Cosmos 3 Edge y ejecutar una política robótica de 4B directamente en Jetson Thor. Incluye datos, despliegue e inferencia en lazo cerrado, con cifras concretas de latencia y desempeño.",
      en: "A reproducible tutorial for post-training Cosmos 3 Edge and running a 4B robot policy directly on Jetson Thor. It covers data, deployment, and closed-loop inference with concrete latency and performance figures."
    }
  }
];
