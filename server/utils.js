const bcrypt = require('bcrypt');
const saltRounds = 10;
const JWTSECRET = process.env.JWTSECRET;
const jwt = require('jwt-simple');


function createJWTForUser(user){
  //sub is short for 'subject' (who the token belongs to)
  let timestamp = new Date().getTime(); //issed at time

  return jwt.encode({sub: user.id, iat: timestamp}, JWTSECRET);
}




function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  return re.test(email);
}

function checkSinginInput(email, password){

  if (validateEmail(password) == false) {
    return false;
  }

  if (password.length < 5) {
    return false;
  } 

  return true;
}

module.exports = {
    createJWTForUser,
  checkSinginInput
}