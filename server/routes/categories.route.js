const router = require('express').Router();
const { Category } = require('../db/models');
router.route('/')
  .get((req, res) => {
    Category.findAll()
      .then((allCategories) => res.json(allCategories))
      .catch((error) => console.log(error));
  });
module.exports = router;
