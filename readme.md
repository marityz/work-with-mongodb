# Тестовый проект для практики Node.js

## Описание проекта: загрузка изображения с сервера с целью отлайкать.
## Так же можно редактировать профиль, добавлять/удалять картинки.

### Инструкция:
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



1. GET localhost:3000/users возвращает	JSON-список всех пользователей;
2. GET localhost:3000/users/:userId(где userId - id пользователя)  возвращает пользователя по _id;
3. POST localhost:3000/users создаёт пользователя;
4. GET localhost:3000/cards возвращает JSON-список всех карточек;
5. POST localhost:3000/cards создаёт карточку;
6. DELETE localhost:3000/cards/:cardId (где cardId - id конкретной карточки) удаляет карточку по идентификатору;
7. PATCH localhost:3000/users/me - обновляет профиль;
8. PUT localhost:3000/cards/:cardId/likes — поставить лайк карточке
9. DELETE localhost:3000/cards/:cardId/likes — убрать лайк с карточки



### v0.0.1(в рамках спринта 13) 

### Технологии:
Html, Css, Js.
База данных реализована на Mongo

[Ссылка на проект]( https://github.com/marityz/work13.git)
