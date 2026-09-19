/**
 * Add recommendations using this shape:
 * url, title, source, publishedAt, sharedAt, summaries.es, summaries.en.
 * publishedAt is the verified original publication date (YYYY-MM-DD).
 * sharedAt records when the link was shared here and is not displayed.
 * Keep the published title unchanged and write both summaries in your own words.
 */
window.SITE_ARTICLES = [
  {
    url: "https://openai.com/index/introducing-the-agents-api/",
    title: "Introducing the Agents API",
    source: "OpenAI",
    publishedAt: "2026-09-10",
    sharedAt: "2026-09-15",
    summaries: {
      es: "OpenAI abre en beta pública la infraestructura de agentes que usa Codex: sesiones duraderas, herramientas, subagentes y entornos administrados o propios detrás de una sola API. Es una base interesante para flujos que deben continuar durante horas o días.",
      en: "OpenAI is opening the agent infrastructure behind Codex in public beta: durable sessions, tools, subagents, and managed or self-hosted environments behind one API. It is an interesting foundation for workflows that must continue for hours or days."
    }
  },
  {
    url: "https://api-docs.deepseek.com/updates/",
    title: "DeepSeek-V4.1-Flash Release",
    source: "DeepSeek",
    publishedAt: "2026-09-10",
    sharedAt: "2026-09-15",
    summaries: {
      es: "DeepSeek V4.1 Flash estrena una arquitectura con comprensión visual nativa y pasa a ser el modelo del alias deepseek-flash. La actualización también reduce precios y detalla la transición de los identificadores V4 Flash anteriores.",
      en: "DeepSeek V4.1 Flash introduces a new architecture with native visual understanding and becomes the model behind the deepseek-flash alias. The update also lowers prices and explains the transition from earlier V4 Flash model IDs."
    }
  },
  {
    url: "https://developer.nvidia.com/blog/frontier-reasoning-reaches-the-edge-how-to-deploy-and-optimize-models-on-nvidia-jetson/",
    title: "Frontier Reasoning Reaches the Edge: How to Deploy and Optimize Models on NVIDIA Jetson",
    source: "NVIDIA Technical Blog",
    publishedAt: "2026-09-04",
    sharedAt: "2026-09-15",
    summaries: {
      es: "Una guía para ejecutar razonamiento y agentes junto a sensores y sistemas conectados con Jetson. Compara modelos compactos, cuantización NVFP4 y decodificación especulativa, con comandos de despliegue y mediciones por tipo de carga.",
      en: "A guide to running reasoning and agents next to sensors and connected systems with Jetson. It compares compact models, NVFP4 quantization, and speculative decoding, with deployment commands and measurements by workload type."
    }
  },
  {
    url: "https://aws.amazon.com/blogs/compute/validating-multi-agent-decisions-with-step-functions-and-bedrock-agentcore/",
    title: "Validating multi-agent decisions with Step Functions and Bedrock AgentCore",
    source: "AWS Compute Blog",
    publishedAt: "2026-09-14",
    sharedAt: "2026-09-15",
    summaries: {
      es: "Un patrón concreto para automatizar decisiones con agentes sin entregarles la acción final. Step Functions coordina el trabajo en paralelo, valida cada propuesta con código determinista, conserva auditoría y envía solo las excepciones a revisión humana.",
      en: "A concrete pattern for automating decisions with agents without giving them the final action. Step Functions coordinates parallel work, validates each proposal with deterministic code, keeps an audit trail, and sends only exceptions for human review."
    }
  },
  {
    url: "https://developer.arm.com/community/arm-community-blogs/b/ai-blog/posts/scaling-on-device-ai-across-different-arm-backends-with-executorch",
    title: "Scaling On-Device AI Across different Arm backends with ExecuTorch",
    source: "Arm AI Blog",
    publishedAt: "2026-09-11",
    sharedAt: "2026-09-15",
    summaries: {
      es: "Arm compara cinco rutas de ExecuTorch para llevar un mismo modelo a CPU, GPU y NPU, desde Cortex-A hasta Cortex-M y Ethos-U. La explicación de particionado, operadores no delegados y artefactos específicos por objetivo es especialmente práctica.",
      en: "Arm compares five ExecuTorch paths for taking one model across CPUs, GPUs, and NPUs, from Cortex-A to Cortex-M and Ethos-U. Its explanation of partitioning, undelegated operators, and target-specific artifacts is especially practical."
    }
  }
];
