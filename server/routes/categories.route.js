const router = require('express').Router();
const { Category } = require('../db/models');
const { Service } = require('../db/models');

router.route('/')
  .get((req, res) => {
    console.log('ZAHODIT V BAZY CATEGORY MODEL');
    Category.findAll()
      .then((categories) => res.json(categories))
      .catch((error) => console.log(error));
  });
router.route('/:id')
  .get((req, res) => {
    const { params } = req;
    const { id } = params;
    console.log('ROUT VIDITTTTTTT', id);
    Service.findAll({
      where: {
        categoryId: id,
      },
      raw: true,
    })
      .then((allServices) => {
        console.log('KONSOLU SERVISIIIIII', allServices);
        res.json(allServices);
      })
      .catch((error) => console.log(error));
  });
module.exports = router;
