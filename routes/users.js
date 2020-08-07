const usersRouter = require('express').Router();
const { getUsers, getUserById } = require('../controllers/users.js');
const { createUser, updateUser, updateAvatar } = require('../controllers/users.js');

usersRouter.get('/', getUsers);

usersRouter.get('/:id', getUserById);

usersRouter.post('/', createUser);

usersRouter.patch('/me', updateUser);

usersRouter.patch('/me/avatar', updateAvatar);

module.exports = usersRouter;
