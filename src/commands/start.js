import { Commands } from "./command.js";
import { logger } from "../config/logger.js";
import { Keyboard } from "grammy";

export async function startCommand(ctx) {
  logger.info("startCommand");

  const keyboard = new Keyboard().text("/start").row().resized();

  await ctx.reply(
    "Доступные команды:\n" +
      `/${Commands.Start} — доступные команды\n` +
      `\n\nВведите текст для редактирования`,
    { reply_markup: keyboard },
  );
}
