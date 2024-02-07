const errors = require('../configs/responseSubCodes');

class CommonError extends Error {
  constructor(type) {
    super();
    this.message = errors[type].message;
    this.statusCode = errors[type].statusCode;
    this.subCode = errors[type].subCode;
  }
}

module.exports = CommonError;
