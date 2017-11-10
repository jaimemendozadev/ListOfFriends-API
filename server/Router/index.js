const Router = require('express').Router();

Router.get('/', (req, res) => {
  res.send('<h1>Hit the api bruh!</h1>');
});

module.exports = Router;