const route = require('express').Router();

route.get('/categories', (req, res) => {
  res.json(['Маникюр', 'Педикюр']);
});

route.get('/categories/:categoryname', (req, res) => {
  res.json('Услуга');
});

module.exports = route;
