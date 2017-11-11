const Router = require('express').Router();
const {authenticate, signup, login} = require('../Controllers');




Router.get('/', (req, res) => {
  res.send('<h1>Hit the api bruh!</h1>');
});

Router.post('/signup', signup);

module.exports = Router;