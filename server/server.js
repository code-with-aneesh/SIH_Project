const express = require('express');
const nodemailer = require("nodemailer");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// MongoDB connection setup (replace with your MongoDB Atlas connection string)
const mongoURI = 'mongodb+srv://aneeshangane:karasuno1024@cluster0.xn1symd.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB Atlas');
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB Atlas connection error:', err);
});

// Middleware setup
app.use(bodyParser.json());
app.use(cors());

// Define your MongoDB schema and model for the User collection here
const User = require('./models/User'); // Replace with the actual path to your User model

// Registration endpoint
app.post('/api/register', async (req, res) => {
  const { name,email, password,areaofExpertise, emergencyNumber } = req.body;

  try {
    // Check if a user with the provided email already exists in the database
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      // User with this email already exists
      return res.status(400).json({ message: 'Email already in use' });
    }

    // Create a new user object
    const newUser = new User({
      name,
      email,
      password,
      areaofExpertise,
      // You should hash and salt the password for security
      emergencyNumber,
      // Add other user properties here if needed
    });

    // Save the new user to the database
    await newUser.save();

    // Registration successful, send a success response
    res.status(201).json({ message: 'Registration successful', user: newUser });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ message: 'Server error' });
  }
});



app.post('/', async (req, res) => {
  const { email } = req.body;
  try {
    const oldUser = await User.findOne({ email });
    if (!oldUser) {
      return res.json({ status: "User Not Exists!!" });
    }
    
    const link = `http://localhost:3000/reset-password/${oldUser._id}`;
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user:"shubshinde8381@gmail.com",
        pass:"vwgibmzumjhhwtao",
      },
    });

   const mailOptions = {
      from: 'shubshinde8381@gmail.com',
      to: email,
      subject: "Password Reset",
      text: link,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        res.status(500).json({ message: 'Failed to send reset email' });
      
      } else {
        console.log("Email sent: " + info.response);
        res.status(200).json({ message: 'Password reset email sent' });
      }
    });
    console.log(link);
  } catch (error) { 
    console.error('Error during password reset:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});