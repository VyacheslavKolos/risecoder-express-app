const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const flatRouter = require('./api/flat/router');

app.use('/flats', flatRouter);

app.listen(3001, () => {
  console.log('Listen 3001');
});
