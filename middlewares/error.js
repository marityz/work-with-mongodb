const ErrorMiddleware = (err, req, res, next) => {
  let { statusCode = 500, message } = err;
  if (err.name === 'ValidationError' || err.name === 'CastError') {
    statusCode = 400;
    message = `${err}`;
  }
  if (err.name === 'MongoError' && err.code === 11000) {
    statusCode = 409;
    message = 'Пользователь с таким email уже существует';
  }
  res
    .status(statusCode)
    .send({
      message: statusCode === 500
        ? 'На сервере произошла ошибка'
        : message,
    });
  next();
};

module.exports = { ErrorMiddleware };
