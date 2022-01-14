const path = require('path');
const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const Filestore = require('session-file-store')(session);
const cors = require('cors');

const app = express();
const PORT = process.env.PORT ?? 3000;

const sessionMiddleware = require('./middlewares/sessions');

const sessionConfig = {
  store: new Filestore(),
  name: 'user_sid',
  secret: process.env.SECRET ?? 'secret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60, // 1 час
    httpOnly: true,
  },
};

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(session(sessionConfig));
app.use(sessionMiddleware);
app.use(cors());

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Сервер слушает порт', PORT);
});
