const router = require('express').Router();
const { Reservation } = require('../db/models');
const reservation = require('../db/models/reservation');

router.route('/')
  .post(async (req, res) => {
    const { input, pass } = req.body;
    console.log(req.body);
    // console.log('Yo YO YO  YO');
    const reservations = await Reservation.findAll();
    // console.log(reservations);

    res.json(reservations);
  });

module.exports = router;
