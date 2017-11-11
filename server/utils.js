const bcrypt = require('bcryptjs');
const saltRounds = 10;

function hashPassword(unencrypted){
  
  console.log("the unencrypted password is ", unencrypted);  
  


}



module.exports = {
  hashPassword
}