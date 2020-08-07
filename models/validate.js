const validate = require('mongoose-validator');

module.exports.urlValidator = [
  validate({
    validator: 'isURL',
    message: 'Неверный формат URL',
  }),
];
