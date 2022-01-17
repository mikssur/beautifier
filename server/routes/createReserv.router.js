const route = require('express').Router();
const { Reservation } = require('../db/models');

route.post('/', (req, res) => {
  console.log(req.body);
  Reservation.create(req.body)
    .then((newReview) => res.status(201).json(newReview))
    .catch((error) => res.status(500).json(error));
});

module.exports = route;
