const router = require('express').Router();
const bcrypt = require('bcrypt');
const { Client } = require('../db/models');

router.route('/')
  .post(async (req, res) => {
    const { password, telephone, login } = req.body;

    const checkClient = await Client.findOne({
      where: {
        password,
        telephone,
      },
    });

    if (checkClient) {
      res
        .status(409)
        .json({ createClient: false, message: 'Такой пользователь уже зарегистрирован' });
    }
    const hash = await bcrypt.hash(password, 10);

    const newClient = await Client.create({
      login,
      password: hash,
      telephone,
      isAdmin: false,
    });

    req.session.user = {
      id: newClient.id,
      login: newClient.login,
      telephone: newClient.telephone,
      signedUp: true,
      isAdmin: false,
    };

    res.json({ createUser: true, message: 'Успешная регистрация' });
  });

module.exports = router;
