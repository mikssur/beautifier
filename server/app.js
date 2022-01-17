const path = require('path');
const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const Filestore = require('session-file-store')(session);

const cors = require('cors');

const app = express();

const PORT = process.env.PORT ?? 3001;

const testRoute = require('./routes/test.route');

const reviewsRoute = require('./routes/reviews.route');
const categoriesRoute = require('./routes/categories.route');
const portfolioRouter = require('./routes/portfolio.router');
const portfolioCRouter = require('./routes/portfolioC.router');
const servicesReserv = require('./routes/servicesReserv.route');
const mastersReserv = require('./routes/mastersReserv.router');
const createReserv = require('./routes/createReserv.router');
const adminReservationRouter = require('./routes/adminReservations.route');
const mastersRouter = require('./routes/masters.router');
const adminAuthRouter = require('./routes/adminAuth.route');
const clientRouter = require('./routes/client.route');
const signinRouter = require('./routes/signin.route');
const sessionRouter = require('./routes/session.route');
const signoutRouter = require('./routes/signout.route');
const freeTimeRouter = require('./routes/freeTime.router');

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
app.use(cors({
  credentials: true,
}));

app.use('/reviews', reviewsRoute);
app.use('/portfolio', portfolioRouter);
app.use('/categories', categoriesRoute);
app.use('/masters', mastersRouter);
app.use('/portfolio', portfolioCRouter);
app.use('/admincabinet', adminReservationRouter);
app.use('/servicesreserv', servicesReserv);
app.use('/mastersreserv', mastersReserv);
app.use('/createreserv', createReserv);
app.use('/cabinet', clientRouter);
app.use('/signin', signinRouter);
app.use('/adminform', adminAuthRouter);
app.use('/session', sessionRouter);
app.use('/signout', signoutRouter);
app.use('/freetime', freeTimeRouter);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Сервер слушает порт', PORT);
});
