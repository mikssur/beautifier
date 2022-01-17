const router = require('express').Router();
const bcrypt = require('bcrypt');
const { Client } = require('../db/models');

router.route('/')
  .post(async (req, res) => {
    const { telephone, password } = req.body;
    const checkClient = await Client.findOne({
      where: {
        telephone,
      },
    });

    if (!checkClient) {
      res.status(401).json({
        message: 'Такой пользователь не существует!',
        authUser: false,
      });
    }

    const isCorrectPassword = await bcrypt.compare(password, checkClient.password);
    if (!isCorrectPassword) {
      res.status(401).json({
        message: 'Пароль введен неправильно!',
        authUser: false,
      });
      return;
    }

    req.session.user = {
      id: checkClient.id,
      login: checkClient.login,
      telephone: checkClient.telephone,
      signedUp: true,
      isAdmin: false,
    };

    res.json({
      message: 'Авторизация прошла успешна!',
      authUser: true,
    });
  });

module.exports = router;
