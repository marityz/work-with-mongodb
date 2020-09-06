# Тестовый проект для практики Node.js

## Описание проекта: загрузка изображения с сервера с целью отлайкать.
## Так же можно редактировать профиль, добавлять/удалять картинки, создавать свой аккаунт.

### Инструкция для локального использования:

Для запуска установите зависимости:
 - npm install

После чего можно запускать локальный сервер: 
- npm run start

Для разработки можно запустить сервер на localhost:3000 с хот релоудом:
- npm run dev

Инструкцию по установки Mongo на ПК здесь:
- [Официальная инструкция](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)

Запустить базу можно командой:
- mongod

Реализована аутентификация и авторизация в проекте Mesto. Теперь:
1. POST  http://localhost:3000/signup - создает уникального пользователя (обязательные поля name, about, link, email, password.)
2. POST http://localhost:3000/signin - возвращает токен, вход в аккаунт (обязательные поля email, password)

Так же добавлен функционал: 
- редактировать можно только данные своей учетной записи и только после авторизации
- удалять можно только свои карточки

1. GET localhost:3000/users возвращает	JSON-список всех пользователей;
2. GET localhost:3000/users/:userId(где userId - id пользователя)  возвращает пользователя по _id;
3. POST localhost:3000/users создаёт пользователя;
4. GET localhost:3000/cards возвращает JSON-список всех карточек;
5. POST localhost:3000/cards создаёт карточку;
6. DELETE localhost:3000/cards/:cardId (где cardId - id конкретной карточки) удаляет карточку по идентификатору;
7. PATCH localhost:3000/users/me - обновляет профиль;
8. PUT localhost:3000/cards/:cardId/likes — поставить лайк карточке
9. DELETE localhost:3000/cards/:cardId/likes — убрать лайк с карточки

# Теперь сервис доступен и онлайн:
### Авторизация 
1. POST  https://www.marityz.tk/signup - создает уникального пользователя (обязательные поля name, about, link, email, password.)
2. POST https://www.marityz.tk/signin - возвращает токен, вход в аккаунт (обязательные поля email, password)
###  Использование 
1. GET https://www.marityz.tk/users возвращает	JSON-список всех пользователей;
2. GET https://www.marityz.tk/users/:userId(где userId - id пользователя)  возвращает пользователя по _id;
3. POST https://www.marityz.tk/users создаёт пользователя;
4. GET https://www.marityz.tk/cards возвращает JSON-список всех карточек;
5. POST https://www.marityz.tk/cards создаёт карточку;
6. DELETE https://www.marityz.tk/cards/:cardId (где cardId - id конкретной карточки) удаляет карточку по идентификатору;
7. PATCH https://www.marityz.tk/users/me - обновляет профиль;
8. PUT https://www.marityz.tk/cards/:cardId/likes — поставить лайк карточке
9. DELETE https://www.marityz.tk/cards/:cardId/likes — убрать лайк с карточки

IP: 178.154.226.220
[Ссылка на проект]( https://marityz.tk )



### v0.0.3(в рамках спринта 15) 

### Технологии:
Html, Css, Js.
База данных реализована на Mongo


