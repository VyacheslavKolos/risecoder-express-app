const { EMAIL_TYPES } = require('../configs/enums');

module.exports = {
  [EMAIL_TYPES.WELCOME]: {
    templateName: 'welcome',
    subject: 'Welcome to kolosOk',
  },
  [EMAIL_TYPES.USER_BLOCKED]: {
    templateName: 'user_blocked',
    subject: 'Your account was blocked',
  },
};
