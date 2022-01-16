const route = require('express').Router();
const { Rewiew } = require('../db/models');

route.get('/', (req, res) => {
  Rewiew.findAll()

    .then((reviews) => res.json(reviews))
    .catch((error) => console.log(error));
});

route.post('/', (req, res) => {
  Rewiew.create(req.body)
    .then((newReview) => res.status(201).json(newReview))
    .catch((error) => res.status(500).json(error));
});

module.exports = route;
