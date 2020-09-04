class ConflictError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 409;
  }

  static isValidConflictError(err) {
    return (err.name === 'MongoError' && err.code === 11000);
  }
}

module.exports = ConflictError;
