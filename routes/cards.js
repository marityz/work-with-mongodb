const cardsRouter = require('express').Router();
const { getCards, createCard, deleteCard } = require('../controllers/cards.js');
const { likeCard, dislikeCard } = require('../controllers/cards.js');

cardsRouter.get('/', getCards);
cardsRouter.post('/', createCard);
cardsRouter.delete('/:cardId', deleteCard);
cardsRouter.put('/:cardId/likes', likeCard);
cardsRouter.delete('/:cardId/likes', dislikeCard);

module.exports = cardsRouter;
