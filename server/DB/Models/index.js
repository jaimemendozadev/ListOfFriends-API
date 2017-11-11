const mongoose = require('mongoose');
const {hashPassword} = require('../../utils.js');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  bio: String,
  email: {type: String, unique: true, lowercase: true, required: true},
  password: {type: String, required: true}
});

// UserSchema.pre('save', (next) => {
//   // do stuff
//   this.password;
//   next();
// });


const UserModel = mongoose.model('User', UserSchema); 


module.exports = {
  UserModel
}

