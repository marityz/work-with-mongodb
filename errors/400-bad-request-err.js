class BadRequestError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 400;
  }

  static isValidBadRequestError(err) {
    return (err.name === 'ValidationError' || err.name === 'CastError');
  }
}

module.exports = BadRequestError;
