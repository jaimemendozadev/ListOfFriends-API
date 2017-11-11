const passport = require('passport');
const User = require('../DB/Models').UserModel;
const JWTSECRET = process.env.JWTSECRET;

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

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

passport.use(jwtLogin);