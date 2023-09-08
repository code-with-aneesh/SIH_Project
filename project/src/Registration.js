import React, { useState } from 'react';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    expertise: '',
    email: '',
    password: '',
    location: '',
    emergencyNumber: '',
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = 'Name is required';
    }

    if (!formData.expertise) {
      newErrors.expertise = 'Area of expertise is required';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (!/^[a-zA-Z0-9]+$/.test(formData.password)) {
      newErrors.password = 'Password must be alphanumeric';
    }

    if (!formData.location) {
      newErrors.location = 'Location is required';
    }

    if (!formData.emergencyNumber) {
      newErrors.emergencyNumber = 'Emergency number is required';
    } else if (!/^\d+$/.test(formData.emergencyNumber)) {
      newErrors.emergencyNumber = 'Invalid emergency number';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Send the form data to your server or perform further actions
      console.log('Form submitted:', formData);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div>
          <label>Area of Expertise:</label>
          <input
            type="text"
            name="expertise"
            value={formData.expertise}
            onChange={handleChange}
          />
          {errors.expertise && <p className="error">{errors.expertise}</p>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <div>
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
          {errors.location && <p className="error">{errors.location}</p>}
        </div>
        <div>
          <label>Emergency Number:</label>
          <input
            type="tel"
            name="emergencyNumber"
            value={formData.emergencyNumber}
            onChange={handleChange}
          />
          {errors.emergencyNumber && (
            <p className="error">{errors.emergencyNumber}</p>
          )}
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
