const validators = require('./flat.validator');
function getUserPaginationValidator(req, res, next) {
  try {
    const validationResult = validators.userPaginationValidator.validate(req.query);

    if (validationResult?.error?.details[0]?.message) {
      throw new Error(validationResult?.error?.details[0]?.message);
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
