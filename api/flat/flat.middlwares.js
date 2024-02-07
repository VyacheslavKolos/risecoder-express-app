const validators = require('./flat.validator');
const CommonError = require('../../customErrors/CommonError');
const { COMMON_ERRORS } = require('../../configs/enums');
function getUserPaginationValidator(req, res, next) {
  try {
    const validationResult = validators.userPaginationValidator.validate(req.query);

    if (validationResult?.error?.details[0]?.message) {
      throw new CommonError(COMMON_ERRORS.VALIDATION_ERROR);
    }

    req.query = validationResult.value;

    next();
  } catch (e) {
    next(e);
  }
}

module.exports = {
  getUserPaginationValidator,
};
