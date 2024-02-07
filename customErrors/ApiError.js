class ApiError extends Error {
  constructor(message, statusCode, subCode) {
    super(message);
    this.statusCode = statusCode;
    this.subCode = subCode;
  }
}

module.exports = ApiError;
