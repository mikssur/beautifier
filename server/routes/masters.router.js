const router = require('express').Router();
// const { Service } = require('../db/models');
const { Master } = require('../db/models');

router.route('/:id')
  .get((req, res) => {
    const { params } = req;
    const { id } = params;
    console.log('ROUT VIDITTTTTTT', id);
    Master.findAll({
      where: {
        categoryId: id,
      },
      raw: true,
    })
      .then((allMasters) => {
        console.log('KONSOLU SERVISIIIIII', allMasters);
        res.json(allMasters);
      })
      .catch((error) => console.log(error));
  });
module.exports = router;
