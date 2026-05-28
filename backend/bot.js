require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const token = process.env.BOT_TOKEN;

// Polling band taaki server crash na ho
const bot = new TelegramBot(token, { polling: false });

// Webhook setup
const url = process.env.RAILWAY_URL; // Variable ka naam sahi rakhein
bot.setWebHook(`${url}/bot${token}`);

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "Game shuru karne ke liye niche button click karein!", {
    reply_markup: {
      inline_keyboard: [[{ text: "Play Game", web_app: { url: process.env.WEBAPP_URL } }]]
    }
  });
});

module.exports = bot;
