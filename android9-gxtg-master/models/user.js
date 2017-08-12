var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: String,
  password: String,
  id:String,
  imgAvata:String,
  firstName:String,
  lastName:String,
  email:String,
  gender:String,
  birthday:String,
  location:String,
  phoneNumber:String
});

module.exports = mongoose.model('User', userSchema);
