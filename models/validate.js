const validate = require('mongoose-validator');

module.exports.urlValidator = [
  validate({
    validator: 'isURL',
    message: 'Неверный формат URL',
  }),
];

module.exports.emailValidator = [
  validate({
    validator: 'isEmail',
    message: (props) => `${props.value} некорректный email!`,
  }),
];
