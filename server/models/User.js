// models/User.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  areaOfExpertise: String,
  email: String,
  password: String,
  state: String,
  district: String,
  location: String,
  emergencyNumber:String
});

const User = mongoose.model('User', userSchema);

module.exports = User;
