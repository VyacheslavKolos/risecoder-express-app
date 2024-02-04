const Joi = require('joi');
const userPaginationValidator = Joi.object().keys({
  page: Joi.number().integer().positive(),
  perPage: Joi.number().integer().positive().default(10),
});

module.exports = {
  userPaginationValidator,
};
