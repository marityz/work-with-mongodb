const Card = require('../models/card');

module.exports.getCards = (req, res) => {
  Card
    .find({})
    .then((сards) => {
      res.send(сards);
    })
    .catch((err) => {
      res.status(500).send({ message: ` Произошла ошибка ${err} ` });
    });
};

module.exports.createCard = (req, res) => {
  const { name, link } = req.body;
  Card
    .create({ name, link, owner: req.user._id })
    .then((card) => res.send(card))
    .catch((err) => {
      if (err.message && err.message.indexOf('ValidationError:')) {
        return res.status(400).send({ message: ` Произошла ошибка ${err} ` });
      }
      return res.status(500).send({ message: ` Произошла ошибка ${err} ` });
    });
};

module.exports.deleteCard = (req, res) => {
  Card
    .findById(req.params.cardId)
    .then((card) => {
      if (!card) {
        return res.status(404).send({ message: 'Карточка не найдена' });
      }
      return Card.findOneAndRemove({ _id: req.params.id, owner: req.user._id })
        .then((found) => {
          if (!found) {
            return res.status(403).send({ message: 'Нет прав на удаление' });
          }
          return res.send({ message: 'Удалена' });
        })
        .catch((err) => res.status(500).send({ message: err.message }));
    })
    .catch((err) => res.status(500).send({ message: ` Произошла ошибка ${err} ` }));
};

module.exports.likeCard = (req, res) => {
  Card
    .findByIdAndUpdate(
      req.params.cardId,
      { $addToSet: { likes: req.user._id } },
      { new: true },
    )
    .then((card) => {
      if (!card) {
        return res.status(404).send({ message: 'Карточка не найдена' });
      }
      return res.send({ card });
    })
    .catch((err) => {
      res.status(500).send({ message: ` Произошла ошибка ${err} ` });
    });
};

module.exports.dislikeCard = (req, res) => {
  Card
    .findByIdAndUpdate(
      req.params.cardId,
      { $pull: { likes: req.user._id } },
      { new: true },
    )
    .then((card) => {
      if (!card) {
        return res.status(404).send({ message: 'Карточка не найдена' });
      }
      return res.send({ card });
    })
    .catch((err) => {
      res.status(500).send({ message: ` Произошла ошибка ${err} ` });
    });
};
