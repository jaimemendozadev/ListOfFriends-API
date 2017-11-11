const Router = require('express').Router();
const {signin, signup} = require('../Controllers');
const passportService = require('../Services/passport.js');
const passport = require('passport');


const requireAuth = passport.authenticate('jwt', {session: false});
const requireSignIn = passport.authenticate('local', {session: false});

//requireAuth assumes user already has JWT in req headers
Router.get('/', requireAuth, (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../public', 'index.html'));
});

//sends back JWT to user
Router.post('/signup', signup);

//signin requires local strategy
Router.post('/signin', requireSignIn, signin);









Router.get('/', (req, res) => {
  res.send('<h1>Hit the api bruh!</h1>');
});






module.exports = Router;