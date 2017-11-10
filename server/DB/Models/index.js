const mongoose = require('mongoose');

const Schema = mongoose.Schema,

const UserSchema = new Schema({
  name: String,
  bio: String,
  email: {type: String, unique: true, lowercase: true, required: true},
  password: {type: String, required: true}
});


const UserModel = mongoose.model('User', UserSchema); 


module.exports = {
  UserModel
}

