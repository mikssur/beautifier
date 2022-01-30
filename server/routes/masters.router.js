const router = require('express').Router();
const { masterService } = require('../db/models');
const { Master } = require('../db/models');

router.route('/:id')
  .get(async (req, res) => {
    const { id } = req.params;
    try {
      const masterServices = await masterService.findAll({
        where: {
          serviceId: id,
        },
        raw: true,
      });
      let masters = [];
      const ids = masterServices.map((el) => el.masterId);

      for (const id of ids) {
        const master = await Master.findOne({
          where: {
            id,
          },
          raw: true,
        });

        masters.push(master);
      }

      res.json(masters);
    } catch (error) {
      res.json({ message: error.message });
    }
  });

module.exports = router;
