import { Bot } from "grammy";
import { logger } from "./logger.js";
import { config } from "dotenv";
config();

const token = process.env.TOKEN;
if (!token) {
  throw new Error("Не задан TOKEN");
}

export const bot = new Bot(token);
logger.info("bot created");
