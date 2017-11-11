const Router = require('express').Router();
const {authenticate, signup, login} = require('../Controllers');
const passportService = require('../Services/passport.js');
const passport = require('passport');


const requireAuth = passport.authenticate('jwt', {session: false});



Router.get('/', (req, res) => {
  res.send('<h1>Hit the api bruh!</h1>');
});


Router.get('/login', requireAuth, (req, res) => {
  res.send("<h1>Hi there!</h1>");
});

Router.post('/signup', signup);

module.exports = Router;