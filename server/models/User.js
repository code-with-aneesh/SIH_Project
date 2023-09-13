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
});

// Hash the password before saving it to the database
userSchema.pre('save', async function (next) {
  try {
    // Only hash the password if it's new or has been modified
    if (!this.isModified('password')) return next();

    // Generate a salt and hash the password with 10 rounds of salt
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);

    this.password = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
});

// Compare the provided password with the hashed password in the database
userSchema.methods.comparePassword = async function (candidatePassword) {
  try {
    return await bcrypt.compare(candidatePassword, this.password);
  } catch (error) {
    throw error;
  }
};

const User = mongoose.model('User', userSchema);

module.exports = User;
