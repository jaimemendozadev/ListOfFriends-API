const bcrypt = require('bcrypt');
const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const LocalStrategy = require('passport-local');
const ExtractJwt = require('passport-jwt').ExtractJwt;

const saltRounds = 10;
const User = require('../DB/Models').UserModel;
const JWTSECRET = process.env.JWTSECRET;



const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: JWTSECRET
} 

const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
  User.findById(payload.sub)
    .then(user => {
      done(null, user);
    })
    .catch(error => {
      done(error, false);
    })  
});



const localOptions = {usernameField: 'email'};

const localLogin = new LocalStrategy(localOptions, (email, password, done) => { 

  User.findOne({email}).then(user => {
      
    user.comparePassword(password, (err, isMatch) => {
      if (err) { done(err) };

      if (!isMatch) { done(null, false) }

      done(null, user);
    });
  })
  .catch(error => {
    console.log("The error finding the User for Passport localLogin is ", error);
    done(error);
  });
  
});

passport.use(jwtLogin);
passport.use(localLogin);