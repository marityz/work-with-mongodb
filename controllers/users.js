const User = require('../models/user');

module.exports.getUsers = (req, res) => {
  User
    .find({})
    .then((Users) => {
      res.send(Users);
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

module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;
  User
    .create({ name, about, avatar })
    .then((users) => {
      res.send({ message: `Пользователь ${users.name} добавлен` });
    })
    .catch((err) => {
      res.status(500).send({ message: ` Произошла ошибка ${err} ` });
    });
};

module.exports.updateUser = (req, res) => {
  const { name, about } = req.body;
  User
    .findByIdAndUpdate(req.user._id, { name, about }, { runValidators: true })
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: `Пользователь с ${req.user._id} не найден` });
      }
      return res.send({ message: `Данные профиля пользователя ${req.user._id} изменены` });
    })
    .catch((err) => {
      res.status(400).send({ message: ` Произошла ошибка ${err} ` });
    });
};

module.exports.updateAvatar = (req, res) => {
  const { avatar } = req.body;
  User
    .findByIdAndUpdate(req.user._id, { avatar }, { runValidators: true })
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: `Пользователь с ${req.user._id} не найден` });
      }
      return res.send({ message: `Картинка профиля пользователя ${req.user._id} изменена` });
    })
    .catch((err) => {
      res.status(400).send({ message: ` Произошла ошибка ${err} ` });
    });
};
