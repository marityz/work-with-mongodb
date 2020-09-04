const Card = require('../models/card');
const NotFoundError = require('../errors/404-not-found-err');
const ForbiddenError = require('../errors/403-forbidden-err');

module.exports.getCards = (req, res, next) => {
  Card
    .find({})
    .then((сards) => {
      res.send(сards);
    })
    .catch(next);
};

module.exports.createCard = (req, res, next) => {
  const { name, link } = req.body;
  Card
    .create({ name, link, owner: req.user._id })
    .then((card) => res.send(card))
    .catch(next);
};

module.exports.deleteCard = (req, res, next) => {
  Card
    .findById(req.params.cardId)
    .then((card) => {
      if (!card) {
        throw new NotFoundError('Такой карточки нет');
      }
      return card;
    })
    .then((card) => {
      if (card.owner._id.toString() === req.user._id) {
        card.remove(req.params.cardId);
        return res.status(200).send({ message: 'Карточка удалена' });
      }
      throw new ForbiddenError('Недостаточно прав');
    })
    .catch(next);
};

module.exports.likeCard = (req, res, next) => {
  Card
    .findByIdAndUpdate(
      req.params.cardId,
      { $addToSet: { likes: req.user._id } },
      { new: true },
    )
    .then((card) => {
      if (!card) {
        throw new NotFoundError('Такой карточки нет');
      }
      return res.send({ card });
    })
    .catch(next);
};

module.exports.dislikeCard = (req, res, next) => {
  Card
    .findByIdAndUpdate(
      req.params.cardId,
      { $pull: { likes: req.user._id } },
      { new: true },
    )
    .then((card) => {
      if (!card) {
        throw new NotFoundError('Такой карточки нет');
      }
      return res.send({ card });
    })
    .catch(next);
};
