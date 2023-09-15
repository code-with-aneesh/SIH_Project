import React, { useState } from 'react';
import './forgotpass.css'; // Import the CSS file with class names
import axios from 'axios';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/', { email });
      setMessage(response.data.status);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="form-box"> {/* Use the form-box class */}
      <h2 className="forgot-heading">Forgot Password</h2> {/* Use the login-heading class */}
      <form className='forms' onSubmit={handleSubmit}>
        <div className="inputboxs"> {/* Use the inputbox class */}
          <label className='mailid' htmlFor="email">Email:</label>
          <input
            className='boxx'
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <button type="submit" className="login-button">Submit</button> {/* Use the login-button class */}
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default ForgotPassword;