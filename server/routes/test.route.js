const route = require('express').Router();

route.get('/categories', (req, res) => {
  res.json(['Маникюр', 'Педикюр']);
});

module.exports = route;


