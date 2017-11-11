const bcrypt = require('bcrypt');
const saltRounds = 10;
const secret = process.env.BCRYPT_SECRET;


function hashPassword(user, callback){
  let unencryptedPW = user.password;

  bcrypt.genSalt(saltRounds, (err, salt) => {

    if (err) {
      console.log("The error generating the salt is ", err);
      callback(err);
    }

    bcrypt.hash(unencryptedPW, salt, null, (err, hash) => {
      if (err){
        console.log("The err hashing the PW is ", err);
      }
      // Store hash for user in DB
      user.password = hash;
      callback();
    });
  }); 




  


}

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function checkSinginInput(email, password){
  console.log("email is ", email);
  console.log("\n");
  console.log("password is ", password);

  if (validateEmail(password) == false) {
    return false;
  }

  if (password.length < 5) {
    console.log("return false, pass length is ", password.length)
    return false;
  } 

  return true;
}

module.exports = {
  hashPassword,
  checkSinginInput
}