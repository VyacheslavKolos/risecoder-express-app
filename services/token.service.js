const jwt = require('jsonwebtoken');

function generateTokenPair(data) {
  const accessToken = jwt.sign(data, process.env.SECRET_WORD, { expiresIn: '15m' });
  const refreshToken = jwt.sign(data, process.env.REFRESH_WORD, { expiresIn: '30d' });

  return {
    accessToken,
    refreshToken,
  };
}

function checkOauthToken(token, tokenType = 'access') {
  const word = tokenType === 'access' ? process.env.SECRET_WORD : process.env.REFRESH_WORD;

  return jwt.verify(token, word);
}

module.exports = {
  generateTokenPair,
  checkOauthToken,
};

module.exports = {
  generateTokenPair,
  checkOauthToken,
};
