const bcrypt = require('bcrypt');
function hashPassword(passwordToHash) {
  return bcrypt.hash(passwordToHash, 2);
}
async function comparePasswords(plainPassword, hashPassword) {
  const isPasswordMatch = await bcrypt.compare(plainPassword, hashPassword);
  if (!isPasswordMatch) {
    throw new Error('Wrong email or password');
  }
  return isPasswordMatch;
}

module.exports = {
  hashPassword,
  comparePasswords,
};
