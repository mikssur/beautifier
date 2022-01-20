const router = require('express').Router();
const bcrypt = require('bcrypt');
const { Reservation } = require('../db/models');
const { Client } = require('../db/models');

router.route('/')
  .post(async (req, res) => {
    const { login, password } = req.body;
    const findAdmin = await Client.findOne({
      where: {
        login,
      },
    });
    if (findAdmin) {
      const isCorrectPassword = await bcrypt.compare(password, findAdmin.password);
      if (!isCorrectPassword) {
        // res.status(401).json({
        //   message: 'Пароль введен неправильно!',
        //   authUser: false,
        // })
        // return;
        res.json({
          message: 'Не верный пароль',
          authUser: false,
        });
      } else {
        req.session.user = {
          id: findAdmin.id,
          login: findAdmin.login,
          telephone: findAdmin.telephone,
          signedUp: true,
          isAdmin: true,
        };

        res.json({
          authClient: true,
          isAdmin: true,
        });
      }
    }
    res.json({
      message: 'Не верный пользователь',
      authUser: false,
    });
  });

module.exports = router;
