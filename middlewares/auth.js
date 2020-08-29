const jwt = require('jsonwebtoken');

module.exports.auth = (req, res, next) => {
  if (!req.cookies.jwt) {
    return res.status(401).send({ message: 'Авторизуйтесь, пожалуйста' });
  }
  const token = req.cookies.jwt;

  let payload;

  try {
    payload = jwt.verify(token, 'some-secret-key');
  } catch (err) {
    return res.status(401).send({ message: 'Авторизуйтесь, пожалуйста' });
  }

  req.user = payload;

  return next();
};
