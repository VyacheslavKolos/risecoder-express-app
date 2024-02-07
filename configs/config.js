module.exports = {
  PORT: 3001,
  MONGO_URL: process.env.MONGO_URL || 'mongodb://localhost:27017/test',
  NO_REPLY_EMAIL: process.env.NO_REPLY_EMAIL,
  NO_REPLY_EMAIL_PASSWORD: process.env.NO_REPLY_EMAIL_PASSWORD,
};
