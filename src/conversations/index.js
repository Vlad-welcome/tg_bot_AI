import { logger } from "../config/logger.js";
import { conversations } from "@grammyjs/conversations";
import { createConversation } from "@grammyjs/conversations";
import { Commands } from "../commands/command.js";
import { messageToAIConversation } from "./messageToAI.js";

export function registerConversations(bot) {
  logger.info("registerConversations");

  bot.use(conversations());

  bot.use(createConversation(messageToAIConversation, Commands.MessageToAI));
}
