// models/User.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: String,
  password: String, // In production, you should hash and salt the password for security
  phoneNumber: String,
  // Add other user properties here if needed
});

const User = mongoose.model('User', userSchema);

module.exports = User;
