import { logger } from "../config/logger.js";
import { Commands } from "./command.js";
import { startCommand } from "./start.js";

export function registerCommands(bot) {
  bot.command(Commands.Start, startCommand);

  logger.info("registerCommands");
}
