require('dotenv').config();

const express = require('express');
const cors = require('cors');

require('./bot');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('TON Tap Backend Running');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});