const router = require('express').Router();
const { Student } = require('../db/models');

router.route('/')
  .get((req, res) => {
    Student.findAll()
      .then((allMasters) => res.json(allMasters))
      .catch((error) => console.log(error));
  });

module.exports = router;
