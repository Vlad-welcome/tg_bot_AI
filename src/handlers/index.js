import { logger } from "../config/logger.js";
import { errorHandler } from "./errors.js";
import { messageToAIHandler } from "./messageToAI.js";

export function registerHandlers(bot) {
  logger.info("registerHandlers");

  errorHandler(bot);

  messageToAIHandler(bot);
}
