import React, { useState } from 'react';
import './register.css';
import axios from 'axios';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    areaOfExpertise: '',
    email: '',
    password: '',
    state: '',
    district: '',
    location: '',
    emergencyNumber: '',
  });

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Password validation conditions
   
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Add your registration logic here using axios.post
      const response = await axios.post('/api/register', formData);
    } catch (error) {
      // Handle registration failure
      
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="areaOfExpertise"
          placeholder="Area of Expertise"
          value={formData.areaOfExpertise}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type={formData.showPassword ? 'text' : 'password'}
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <input
          type="text"
          name="state"
          placeholder="state"
          value={formData.state}
          onChange={handleChange}
        />
        <input
          type="text"
          name="district"
          placeholder="district"
          value={formData.district}
          onChange={handleChange}
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
        />
        <input
          type="text"
          name="emergencyNumber"
          placeholder="Emergency Number"
          value={formData.emergencyNumber}
          onChange={handleChange}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
//register.js