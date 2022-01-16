const router = require('express').Router();
const { Client } = require('../db/models');

router.route('/')
  .post(async (req, res) => {
    const { telephone, password } = req.body;
    const checkClient = await Client.findOne({
      where: {
        telephone,
        password,
      },
    });

    if (!checkClient) {
      res.status(401).json({
        message: 'Такой пользователь не существует!',
        authUser: false,
      });
    }

    req.session.client = {
      id: checkClient.id,
      login: checkClient.login,
      telephone: checkClient.telephone,
      signedUp: true,
    };

    res.json({
      message: 'Авторизация прошла успешна!',
      authUser: true,
    });
  });

module.exports = router;
