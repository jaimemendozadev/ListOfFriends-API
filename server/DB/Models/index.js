const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;



const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  bio: String,
  email: {type: String, unique: true, lowercase: true, required: true},
  password: {type: String, required: true}
});

UserSchema.pre('save', function(next){
  //must invoke next() to actually save new document in DB
  //cannot use arrow function for mongoose pre hooks for 'this' context
  let User = this;

  bcrypt.genSalt(saltRounds).then(salt => {
    bcrypt.hash(User.password, salt)
      .then(hash => {
        console.log("our hashed PW is ", hash);
        User.password = hash;
        next();
      })
      .catch(error => {
        console.log("Error from hashing PW is ", error);
        next(error);
      })
  })
  .catch(error => {
    console.log("Error from genSalt is ", error);
    next(error);
  });
});


const UserModel = mongoose.model('User', UserSchema); 


module.exports = {
  UserModel
}

