const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(bodyParser.json());

const configs = require('./configs/config');
mongoose.connect(configs.MONGO_URL);

const flatRouter = require('./api/flat/router');

app.use('/flats', flatRouter);

app.listen(configs.PORT, () => {
  console.log(`Listen ${configs.PORT}`);
});
