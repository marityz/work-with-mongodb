const jwt = require('jsonwebtoken');
const AuthError = require('../errors/401-auth-err');

const { NODE_ENV, JWT_SECRET } = process.env;

module.exports.auth = (req, res, next) => {
  if (!req.cookies.jwt) {
    throw new AuthError('Авторизуйтесь, пожалуйста');
  }
  const token = req.cookies.jwt;

  let payload;

  try {
    payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : 'some-secret-key');
  } catch (err) {
    throw new AuthError('Авторизуйтесь, пожалуйста');
  }

  req.user = payload;

  return next();
};
