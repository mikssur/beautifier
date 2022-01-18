const route = require('express').Router();
const { Reservation } = require('../db/models');

route.get('/:id', async (req, res) => {
  const date = req.params.id;
  Reservation.findAll({
    where: {
      date,
    },
    raw: true,
  })
    .then((freeTime) => res.json(freeTime))
    .catch((error) => console.log(error));
});

module.exports = route;
