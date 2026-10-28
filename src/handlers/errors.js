import { logger } from "../config/logger.js";

export function errorHandler(bot) {
  bot.catch((err) => {
    logger.error("Ошибка в боте:", err);
  });
}
