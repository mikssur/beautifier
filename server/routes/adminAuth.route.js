const router = require('express').Router();
const bcrypt = require('bcrypt');
const { Reservation } = require('../db/models');
const { Client } = require('../db/models');

router.route('/')
  .post(async (req, res) => {
    const { login, password } = req.body;
    console.log(req.body.password);
    const findAdmin = await Client.findOne({
      where: {
        login,
      },
    });
    if (findAdmin) {
      const isCorrectPassword = await bcrypt.compare(password, findAdmin.password);
      console.log(isCorrectPassword);
      if (!isCorrectPassword) {
        console.log('Not correct');
        // res.status(401).json({
        //   message: 'Пароль введен неправильно!',
        //   authUser: false,
        // })
        // return;
      } else {
        req.session.client = {
          id: findAdmin.id,
          login: findAdmin.login,
          telephone: findAdmin.telephone,
          signedUp: true,
          isAdmin: true,
        };

        res.json({
          message: 'Авторизация прошла успешна!',
          authUser: true,
        });
      }
    }
    const reservations = await Reservation.findAll();
    res.json(reservations);
  });

module.exports = router;

// .post((req, res) => {
//   Client.create(req.body)
//     .then((newClient) => res.status(201).json(newClient))
//     .catch((error) => res.status(500).json(error));
// });
