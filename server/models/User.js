// models/User.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  areaOfExpertise: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String, // Change to String to store emergencyNumber as a string
    required: true,
  },
  state: {
    type: String, // Add state field
    required: true,
  },
  district: {
    type: String, // Add district field
    required: true,
  },
  location: {
    type: String, // Add location field
    required: true,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
