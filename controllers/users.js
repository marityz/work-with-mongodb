const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

module.exports.getUsers = (req, res) => {
  User
    .find({})
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      res.status(500).send({ message: ` Произошла ошибка ${err} ` });
    });
};

module.exports.getUserById = (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: `Пользователь с id=${req.params.id} не найден`,
        });
      }
      return res.send(user);
    })
    .catch((err) => {
      res.status(500).send({ message: ` Произошла ошибка ${err} ` });
    });
};

module.exports.login = (req, res) => {
  const { email, password } = req.body;

  return User.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign({ _id: user._id }, 'some-secret-key', { expiresIn: '7d' });
      res.send({ token });
    })
    .catch((err) => {
      res.status(401).send({ message: err.message });
    });
};

module.exports.createUser = (req, res) => {
  const {
    name, about, avatar, email, password,
  } = req.body;
  if (!password) return res.status(400).send({ message: 'Поле "пароль" должно быть заполнено' });
  return bcrypt.hash(password, 10)
    .then((hash) => User
      .findOne({ email })
      .then((user) => {
        if (user !== null) {
          return res.status(400).send({ message: 'Пользователь с этим email  уже существует' });
        }
        return hash;
      })
      .catch((err) => res.status(400).send({ message: ` Произошла ошибка ${err} ` })))
    .then((hash) => User.create({
      name, about, avatar, email, password: hash,
    }))
    .then((user) => {
      res.status(201).send({
        _id: user._id,
        email: user.email,
      });
    })
    .catch((err) => {
      if (err.message && err.message.indexOf('ValidationError:')) {
        return res.status(400).send({ message: ` Произошла ошибка ${err} ` });
      }
      return res.status(500).send({ message: ` Произошла ошибка ${err} ` });
    });
};

module.exports.updateUser = (req, res) => {
  const { name, about } = req.body;
  User
    .findByIdAndUpdate(req.user._id, { name, about }, { new: true, runValidators: true })
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: `Пользователь с ${req.user._id} не найден` });
      }
      return res.send(user);
    })
    .catch((err) => {
      if (err.message && err.message.indexOf('ValidationError:')) {
        return res.status(400).send({ message: ` Произошла ошибка ${err} ` });
      }
      return res.status(500).send({ message: ` Произошла ошибка ${err} ` });
    });
};

module.exports.updateAvatar = (req, res) => {
  const { avatar } = req.body;
  User
    .findByIdAndUpdate(req.user._id, { avatar }, { new: true, runValidators: true })
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: `Пользователь с ${req.user._id} не найден` });
      }
      return res.send({ user });
    })
    .catch((err) => {
      if (err.message && err.message.indexOf('ValidationError:')) {
        return res.status(400).send({ message: ` Произошла ошибка ${err} ` });
      }
      return res.status(500).send({ message: ` Произошла ошибка ${err} ` });
    });
};
