const tokenService = require('./token.service');

function checkBearerToken(req, res, next) {
  let token = req.get('Authorization');
  try {
    if (!token) {
      throw new Error('Token not present');
    }

    if (!token?.startsWith('Bearer ')) {
      throw new Error('Token not correct');
    }
    token = token.replace('Bearer ', '');

    req.token = {
      ...req.token,
      token,
    };
    next();
  } catch (e) {
    next(e);
  }
}

function authenticateToken(req, res, next) {
  try {
    const accessToken = req.token.token;

    const isTokenActive = tokenService.checkOauthToken(accessToken, 'access');

    if (!isTokenActive) {
      throw new Error('Token expired');
    }

    next();
  } catch (e) {
    next(e);
  }
}

module.exports = {
  checkBearerToken,
  authenticateToken,
};
