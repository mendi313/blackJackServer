const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const deck = require('./routes/deck');
const hit = require('./routes/hit');
const port = process.env.PORT || 3000;
const app = express();

mongoose.set('strictQuery', false);
mongoose.connect(`${process.env.MONGO_CONNECT_URL}`, {
  useNewUrlParser: true,
});

app.use(cors());

app.use('/', deck);
app.use('/hit', hit);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
