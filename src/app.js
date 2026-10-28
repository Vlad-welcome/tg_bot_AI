import { bot } from "./config/bot.js";
import { logger } from "./config/logger.js";
import { registerCommands } from "./commands/index.js";
import { registerHandlers } from "./handlers/index.js";
import { registerConversations } from "./conversations/index.js";

registerConversations(bot);

registerCommands(bot);

registerHandlers(bot);

bot.start();
logger.info("Бот запущен");
