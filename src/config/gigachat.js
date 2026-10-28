import GigaChat from "gigachat";
import { Agent } from "node:https";

// Некоторые среды считают сертификат Сбера ненадежным.
// Для локальной разработки можно отключить проверку:
const httpsAgent = new Agent({
  rejectUnauthorized: false,
});

const gigaChatClient = new GigaChat({
  timeout: 600,
  model: "GigaChat:latest",
  credentials: process.env.AI_AUTH_KEY,
  httpsAgent: httpsAgent,
  autoRefreshToken: true,
});

export { gigaChatClient };
