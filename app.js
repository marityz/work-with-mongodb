const express = require('express');
const cookieParser = require('cookie-parser');

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const usersRoutes = require('./routes/users');
const cardsRoutes = require('./routes/cards.js');

const { createUser, login } = require('./controllers/users');
const { auth } = require('./middlewares/auth');

const { PORT = 3000 } = process.env;

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.post('/signup', createUser);
app.post('/signin', login);
// защитили все роуты кроме создания юзера и логина
app.use(auth);
app.use('/cards', cardsRoutes);
app.use('/users', usersRoutes);
app.use((req, res) => res.status(404).send({ message: `Запрашиваемый ресурс: ${req.url} не найден` }));
app.listen(PORT, () => {
  console.log(`Номер порта на котором запущен сервис: ${PORT}`);
});
