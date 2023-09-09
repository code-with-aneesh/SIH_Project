import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    areaOfExpertise: '',
    state: '',
    district: '',
    location: '',
    emergencyNumber: '',
  });

  const [passwordConditionsMet, setPasswordConditionsMet] = useState({
    minLength: false,
    hasLetter: false,
    hasNumber: false,
  });

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Add your registration logic here using axios.post
      console.log(formData);
    } catch (error) {
      // Handle registration failure
      console.error(error);
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
        <div>
          Password conditions:
          <ul>
            <li>At least 8 characters: {passwordConditionsMet.minLength ? '✅' : '❌'}</li>
            <li>At least 1 letter: {passwordConditionsMet.hasLetter ? '✅' : '❌'}</li>
            <li>At least 1 number: {passwordConditionsMet.hasNumber ? '✅' : '❌'}</li>
          </ul>
        </div>
        <input
          type={formData.showPassword ? 'text' : 'password'}
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <label>
          Show Password
          <input
            type="checkbox"
            name="showPassword"
            checked={formData.showPassword}
            onChange={(e) =>
              setFormData({ ...formData, showPassword: e.target.checked })
            }
          />
        </label>
        <select
          name="state"
          value={formData.state}
          onChange={handleChange}
        >
          {/* Populate this select with a list of Indian states */}
          <option value="">Select State</option>
          {/* Add options for Indian states */}
        </select>
        <select
          name="district"
          value={formData.district}
          onChange={handleChange}
        >
          {/* Populate this select with a list of districts based on the selected state */}
          <option value="">Select District</option>
          {/* Add options for districts */}
        </select>
        <select
          name="location"
          value={formData.location}
          onChange={handleChange}
        >
          {/* Populate this select with a list of locations based on the selected district */}
          <option value="">Select Village/Town</option>
          {/* Add options for locations */}
        </select>
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
