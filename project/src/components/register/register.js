import React, { useState } from 'react';
import './register.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    areaOfExpertise: '',
    emergencyNumber: '',
  });

  const [passwordConditionsMet, setPasswordConditionsMet] = useState({
    minLength: false,
    hasLetter: false,
    hasNumber: false,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Password validation conditions
    if (name === 'password') {
      const minLengthCondition = value.length >= 8;
      const hasLetterCondition = /[a-zA-Z]/.test(value);
      const hasNumberCondition = /[0-9]/.test(value);

      setPasswordConditionsMet({
        minLength: minLengthCondition,
        hasLetter: hasLetterCondition,
        hasNumber: hasNumberCondition,
      });
    }
  };

  const captureUserLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        setFormData({ ...formData, latitude, longitude });

        
      }, (error) => {
        console.error("Error capturing user location:", error);
      });
    } else {
      console.error("Geolocation is not available in this browser.");
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Add your registration logic here using axios.post
      const response = await axios.post('/api/register', formData);
      navigate('/');
    } catch (error) {
      // Handle registration failure
    }
  };

  return (
    <div className="container">
      <h2 className="register-heading">Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            <i className="fas fa-user"></i> Name:
          </label>
          <div className='input-box'>
            <input
              className='input-field'
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-box">
            <label htmlFor="area-of-expertise" className="form-label">
              <i className="fas fa-briefcase"></i> Area of Expertise:
            </label>
            <input
              className='input-field'
              type="text"
              id="area-of-expertise"
              name="areaOfExpertise"
              value={formData.areaOfExpertise}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-box">
            <label htmlFor="email" className="form-label">
              <i className="fas fa-envelope"></i> Email Address:
            </label>
            <input
              className='input-field'
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-box">
            <label htmlFor="password" className="form-label">
              <i className="fas fa-lock"></i> Password (Alphanumeric):
            </label>
            <input
              className='input-field'
              type="password"
              id="password"
              name="password"
              pattern="^(?=.*[0-9])(?=.*[A-Za-z]).{8,}$"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <small className="password-condition">
            Password must be at least 8 characters and contain at least one
            number and one letter.
          </small>

          <button type="button" onClick={captureUserLocation} className="btn-capture-location">
          Capture Location
          </button>
          
        </div>

        <button type="submit" className="btn-register">
          Register
        </button>
      </form>

      <p className="login-link">
        Already have an account ? <a href="/">Login</a>
      </p>
    </div>
  );
}

export default Register;
