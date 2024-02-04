const authRouter = require('express').Router();
const controller = require('./auth.controller');
const authGeneralMdlwr = require('../../services/auth.middlewares');

authRouter.post('/', controller.authUser);
authRouter.post('/refresh', authGeneralMdlwr.checkBearerToken, controller.refreshToken);

module.exports = authRouter;
