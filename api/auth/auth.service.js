const Auth = require('../../dataBase/Auth');
function insertNewTokenPair(tokenObj) {
  return Auth.create(tokenObj);
}

module.exports = {
  insertNewTokenPair,
};
