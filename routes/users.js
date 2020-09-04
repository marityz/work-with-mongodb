const usersRouter = require('express').Router();
const { Joi, celebrate } = require('celebrate');
const { getUsers, getUserById } = require('../controllers/users.js');
const { updateUser, updateAvatar } = require('../controllers/users.js');

usersRouter.get('/', getUsers);

usersRouter.get('/:id', celebrate({
  params: Joi.object().keys({
    id: Joi.string().alphanum().length(24),
  }),
}), getUserById);

usersRouter.patch('/me', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    about: Joi.string().required().min(2).max(30),
  }),
}), updateUser);

usersRouter.patch('/me/avatar', celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().required().uri(),
  }),
}), updateAvatar);
module.exports = usersRouter;
