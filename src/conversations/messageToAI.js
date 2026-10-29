import { logger } from "../config/logger.js";
import { InlineKeyboard } from "grammy";
import { gigaChatClient } from "../config/gigachat.js";

export async function messageToAIConversation(conversation, ctx) {
  logger.info("messageToAIConversation");

  const botUsername = ctx.me.username;
  const text = ctx.message.text?.replace(`@${botUsername}`, "").trim();

  const keyboardChoice = new InlineKeyboard().text("Да", `yes`).text("Нет", `no`);

  await ctx.reply("Подтвердить отправку?", { reply_markup: keyboardChoice });

  const choice = await conversation.waitForCallbackQuery(["yes", "no"]);
  const answer = choice.callbackQuery.data;
  await choice.answerCallbackQuery();

  if (answer === "yes") {
    // Показываем пользователю, что бот "печатает"
    await ctx.replyWithChatAction("typing");

    try {
      const prompt = "Твоя задача переписать этот текст в официально-деловой стиль: ";
      const messAI = prompt + text;
      // Отправляем запрос к GigaChat API
      const response = await gigaChatClient.chat({
        messages: [
          {
            role: "user",
            content: messAI,
          },
        ],
      });

      // Извлекаем ответ из структуры ответа API
      const aiResponse = response.choices[0]?.message?.content;

      if (aiResponse) {
        await ctx.reply(aiResponse);
      } else {
        await ctx.reply("Не удалось получить ответ от GigaChat.");
      }
    } catch (error) {
      console.error("Ошибка при запросе к GigaChat:", error);
      await ctx.reply("Произошла ошибка при обращении к ИИ. Попробуйте позже.");
    }
  }
  if (answer === "no") {
    await ctx.reply(`Отправка отменена`);
  }
}
