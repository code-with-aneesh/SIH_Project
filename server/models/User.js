// models/User.js

// models/User.js

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  areaOfExpertise: String,
  emergencyNumber: String,
  latitude:String,
  longitude:String,
});

// Hash the password before saving it to the database


const User = mongoose.model('User', userSchema);

module.exports = User;
