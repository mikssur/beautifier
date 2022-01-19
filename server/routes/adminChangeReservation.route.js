const router = require('express').Router();
const { Reservation } = require('../db/models');

router.route('/')
  .post(async (req, res) => {
    const {
      id, clientName, clientNumber, masterId, serviceId,
    } = req.body;
    // console.log(req.body);
    const updatedTable = await Reservation.update(
      {
        clientName,
        clientNumber,
        masterId,
        serviceId,
      },
      {
        where: {
          id,
        },
      },
    );
    const reservations = await Reservation.findAll();
    res.json(reservations);
  });

module.exports = router;
