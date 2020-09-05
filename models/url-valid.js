const validator = require('validator/lib/isURL');
const BadReqError = require('../errors/400-bad-request-err');

const isUrlValidate = (link) => {
  if (!validator(link)) {
    throw new BadReqError('Формат ссылки не верный');
  } else return link;
};

module.exports = { isUrlValidate };
