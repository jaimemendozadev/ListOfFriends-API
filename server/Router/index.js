const Router = require('express').Router();
const {signin, signup} = require('../Controllers');
const passportService = require('../Services/passport.js');
const passport = require('passport');
const path = require('path');

const requireAuth = passport.authenticate('jwt', {session: false});
const requireSignIn = passport.authenticate('local', {session: false});

//requireAuth assumes user already has JWT in req headers
Router.get('/', requireAuth, (req, res) => {
  res.send({auth: "success"});
});

//sends back JWT to user
Router.post('/signup', signup);

//signin requires local strategy
Router.post('/signin', requireSignIn, signin);


module.exports = Router;