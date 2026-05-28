require('dotenv').config();
const express = require('express');
const app = express();
const bot = require('./bot');

app.use(express.json());

// Telegram webhook listener
app.post(`/bot${process.env.BOT_TOKEN}`, (req, res) => {
  bot.processUpdate(req.body);
  res.sendStatus(200);
});

app.get('/', (req, res) => res.send('Server Active'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
