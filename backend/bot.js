require('dotenv').config();

const TelegramBot = require('node-telegram-bot-api');

const token = process.env.BOT_TOKEN;

const bot = new TelegramBot(token, {
  polling: true
});

bot.onText(/\/start(?: (.+))?/, async (msg, match) => {

  const referral = match[1];

  await bot.sendMessage(msg.chat.id,
    'Welcome To TON Tap Game',
    {
      reply_markup: {
        inline_keyboard: [[
          {
            text: 'Open Game',
            web_app: {
              url: process.env.WEBAPP_URL
            }
          }
        ]]
      }
    }
  );

  if (referral) {
    console.log('Referral:', referral);
  }
});

module.exports = bot;