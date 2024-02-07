const { COMMON_ERRORS } = require('./enums');
const { BAD_REQUEST } = require('./responseStatuses');
module.exports = {
  [COMMON_ERRORS.VALIDATION_ERROR]: {
    message: 'Invalid data that you send',
    statusCode: BAD_REQUEST,
    subCode: '400.1',
  },
};
