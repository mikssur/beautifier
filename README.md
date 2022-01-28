## Beautifier
### Web-приложение для салона красоты

Данное приложение разработано для салона красоты Beautifier. Оно включает в себя клиентскую часть и панель управления. Заказчик хотел получить современное, функциональное веб-приложение с возможностью бронирования услуг потенциальным клиентом через специальную форму, с последующим смс-оповещением, с возможностью отменить свою запись через личный кабинет, а так же оставить отзыв о полученном сервисе прямо на сайте в разделе отзывы. Со стороны администратора в функционал заложены: учет всех бронирований и возможность их редактирования, модерация поступающих отзывов, возможность изменения пароля.
Клиенты могут зарегистрировать личный кабинет, приложение оснащено функциями регистрации и авторизации пользователя.
Внизу главной страницы - портфолио мастеров, чтобы клиент мог быстро посмотреть их работы и оценить качество услуг. Внизу главной страницы интегрированы yandex-карты с местоположением салона красоты.   
Для взаимодейтсвия с администратором в приложение добавлен всплывающий чат на API Chatra.
Данные о категориях, услугах, мастерах, отзывах, зарегистрированных пользователях и бронированиях хранятся в базе данных.

- Структура базы данных 
![](/images/bdbeautifier.png)

- Блок основной страницы
![](/images/main.png)

- Галерея
![](/images/galareja.jpeg)
![](/images/galareja2.jpeg)

- Категории услуг
![](/images/categoryi.jpeg)

- Сервисы выбранной категории (например, ногтевой сервис)
![](/images/nogti.jpeg)


- Мастера
![](/images/mastera.jpeg)


- Страница с формой бронирования даты на свободные даты и время
![](/images/zapisj3.jpeg)
![](/images/zapisj2.jpeg)
![](/images/zapisj.jpeg)
![](/images/formazapisi.jpeg)
![](/images/reservationform.png)

- Просмотр актуальных бронирований, с возможностью изменить состояние бронирования или удалить его
![](/images/admincabinet.png)

- Отзывы о салоне
![](/images/otzivi.jpeg)

- Оставить отзыв
![](/images/ostavitjotziv.jpeg)

## Стек технологий:
JavaScript

**DB**: PostgreSQL, Sequelize ORM

**Back**: Node.js, Express, Sessions, Bcrypt, Cors

**Front**: React + Redux, Redux Saga, HTML5, SCSS/CSS, UI Kit

## Планы развития:
* Полнофункциональное внедрение оплаты
* Адаптация приложения под все виды устройств

### Установка:
В директории 2 папки:
* **server/** Отвечает за back-end. 
   * cd server
   * npm ci
   * npx sequelize db:create
   * npx sequelize db:migrate
   * npx sequelize db:seed:all
   * npm run dev
* **client/** - front-end. 
   * cd client 
   * npm ci
   * npm start
