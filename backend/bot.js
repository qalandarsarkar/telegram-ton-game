require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

const token = process.env.BOT_TOKEN;

// Polling ko hatayein ya sirf tabhi use karein jab local machine par ho
const bot = new TelegramBot(token, { polling: process.env.NODE_ENV !== 'production' });

bot.onText(/\/start(?: (.+))?/, async (msg, match) => {
  const referral = match[1];

  try {
    await bot.sendMessage(msg.chat.id, 'Welcome To TON Tap Game', {
      reply_markup: {
        inline_keyboard: [[
          {
            text: 'Open Game',
            web_app: { url: process.env.WEBAPP_URL }
          }
        ]]
      }
    });
  } catch (error) {
    console.error('Error sending message:', error);
  }

  if (referral) {
    console.log('Referral:', referral);
  }
});

module.exports = bot;
