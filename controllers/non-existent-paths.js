const NotFoundError = require('../errors/404-not-found-err');

module.exports.nonExistentPaths = () => {
  throw new NotFoundError('Такой страницы нет');
};
