import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';


import { useNavigate} from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('/api/login', formData);
      const { user } = response.data;
    
      if (user) {
       
        navigate('/homepage'); 
      } else {
        
        console.error('Login failed: User not found or invalid password');
      }
     
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        console.error('Login failed:', error.response.data.message);
      } else {
        console.error('Login failed:', error.message);
      }
      
    }
   

  };

  return (
    <div className="form-box">
    <div className="form-value">
        <form onSubmit={handleSubmit}>
            <h2>Login Account</h2>
            <div className="inputbox">
                <ion-icon name="mail-outline"></ion-icon>
                <input type="email" name="email"
                value={formData.email}
                onChange={handleChange}
                 required />
                <label htmlFor="email">Email</label>
            </div>
            <div className="inputbox">
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input type="password" 
                name="password"
                 value={formData.password}
                 onChange={handleChange}
                required />
                <label htmlFor="password">Password</label>
            </div>
            <div className="forget">
                <label > <a href="forgotpass">Forget
                        Password?</a></label>
            </div>
            <button>Login Account</button>
            <div className="register">
                <p>Don't Have an Account ? <a href="/register">Sign Up</a></p>
            </div>
        </form>
    </div>
</div>
  );
  
}

export default Login;
