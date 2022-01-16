const router = require('express').Router();
const { Reservation } = require('../db/models');
const reservation = require('../db/models/reservation');

router.route('/')
  .get(async (req, res) => {
    const reservations = await Reservation.findAll();
    console.log(reservations);

    res.json(reservations);
  });

module.exports = router;
