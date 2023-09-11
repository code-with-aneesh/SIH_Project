// models/User.js

// models/User.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  areaOfExpertise: String,
  emergencyNumber:String
});

const User = mongoose.model('User', userSchema);

module.exports = User;