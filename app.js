const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(bodyParser.json());

const configs = require('./configs/config');
mongoose.connect(configs.MONGO_URL);

mongoose.set('debug', true);

const flatRouter = require('./api/flat/flat.router');
const userRouter = require('./api/user/user.router');
const authRouter = require('./api/auth/auth.router');
const authGeneralMdlwr = require('./services/auth.middlewares');

app.use(
  '/flats',
  authGeneralMdlwr.checkBearerToken,
  authGeneralMdlwr.authenticateToken,
  flatRouter,
);
app.use('/users', userRouter);
app.use('/auth', authRouter);

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  res
    .status(err.statusCode || 500)
    .json({ message: err.message || 'Unknown error', customCode: err?.subCode });
});

app.listen(configs.PORT, () => {
  console.log(`Listen ${configs.PORT}`);
});
