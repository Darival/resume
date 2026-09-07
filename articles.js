/**
 * Add recommendations using this shape:
 * url, title, source, sharedAt, summaries.es, summaries.en.
 * Keep the published title unchanged and write both summaries in your own words.
 */
window.SITE_ARTICLES = [
  {
    url: "https://openai.com/index/chatgpt-connects-health-records-and-healthcare-sources/",
    title: "Healthcare organizations can now connect EHR and additional industry data to ChatGPT",
    source: "OpenAI",
    sharedAt: "2026-09-07",
    summaries: {
      es: "OpenAI conecta ChatGPT con expedientes Epic autorizados y nueve fuentes públicas de salud mediante un plugin de solo lectura. Es un buen ejemplo de IA aplicada con permisos, trazabilidad y contexto operativo real.",
      en: "OpenAI connects ChatGPT to authorized Epic records and nine public healthcare sources through a read-only plugin. It is a useful example of applied AI with permissions, traceability, and real operational context."
    }
  },
  {
    url: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/",
    title: "Introducing Gemini 3.8 Flash and 3.8 Flash Cyber",
    source: "Google DeepMind",
    sharedAt: "2026-09-07",
    summaries: {
      es: "Gemini 3.8 Flash mejora razonamiento, programación y tareas con agentes sin subir el precio introductorio de 3.7. La variante Cyber se concentra en detectar vulnerabilidades y automatizar parches para defensores autorizados.",
      en: "Gemini 3.8 Flash improves reasoning, coding, and agentic work without raising 3.7's introductory price. The Cyber variant focuses on vulnerability discovery and automated patching for trusted defenders."
    }
  },
  {
    url: "https://www.edgeimpulse.com/blog/from-vibration-to-repair-an-edge-agentic-ai-conveyor-with-edge-impulse-uns-and-arduino-ventuno-q/",
    title: "From Vibration to Repair: An Edge Agentic AI Conveyor with Edge Impulse, UNS, and Arduino VENTUNO Q",
    source: "Edge Impulse",
    sharedAt: "2026-09-07",
    summaries: {
      es: "Un proyecto industrial completo: vibración, detección de anomalías, MQTT como Unified Namespace y un agente local que decide si abrir una reparación. La arquitectura híbrida SBC/MCU del VENTUNO Q lo vuelve especialmente útil para IoT de planta.",
      en: "A complete industrial project combining vibration data, anomaly detection, MQTT as a Unified Namespace, and a local agent that decides whether to open a repair. The VENTUNO Q's hybrid SBC/MCU architecture makes it especially relevant to factory IoT."
    }
  },
  {
    url: "https://aws.amazon.com/blogs/industries/building-a-production-ai-agent-on-aws-a-six-pillar-walkthrough/",
    title: "Building a Production AI Agent on AWS: A Six-Pillar Walkthrough",
    source: "AWS",
    sharedAt: "2026-09-07",
    summaries: {
      es: "AWS recorre seis pilares para llevar un agente de inventario automotriz de demostración a producción: construir, probar, operar, asegurar, observar y gobernar. Destacan las evaluaciones, autorización de herramientas, métricas y límites de emergencia.",
      en: "AWS walks an automotive inventory agent from demo to production through six pillars: build, test, run, secure, observe, and govern. The evaluation harness, tool authorization, operational metrics, and emergency controls stand out."
    }
  },
  {
    url: "https://www.edgeimpulse.com/blog/from-pytorch-to-the-edge-getting-started-with-executorch-and-edge-impulse/",
    title: "From PyTorch to the Edge: Getting Started with ExecuTorch and Edge Impulse",
    source: "Edge Impulse",
    sharedAt: "2026-09-07",
    summaries: {
      es: "Una guía práctica para mantener modelos dentro del ecosistema PyTorch y exportarlos a dispositivos con ExecuTorch. Explica los bloques disponibles, los artefactos ONNX y PTE, tamaños reales y las limitaciones actuales en microcontroladores y NPU.",
      en: "A practical guide to keeping models in the PyTorch ecosystem and exporting them to devices with ExecuTorch. It explains the available blocks, ONNX and PTE artifacts, real sizes, and current microcontroller and NPU limitations."
    }
  }
];
