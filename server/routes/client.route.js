const router = require('express').Router();
const { Client } = require('../db/models');

router.route('/')
  .post((req, res) => {
    Client.create(req.body)
      .then((newClient) => res.status(201).json(newClient))
      .catch((error) => res.status(500).json(error));
  });

module.exports = router;
