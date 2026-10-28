import { logger } from "../config/logger.js";
import { Commands } from "../commands/command.js";

export function messageToAIHandler(bot) {
  logger.info("messageToAIHandler");
  bot.on("message:text", (ctx) => ctx.conversation.enter(Commands.MessageToAI));
}
