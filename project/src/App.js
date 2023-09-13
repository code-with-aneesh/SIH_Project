// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from './components/register/register';
import Navbar from './components/homepage/Navbar/Navbar';

import ForgotPassword from './components/forgotpass/forgotpass';
import Login from './components/register/Login';

function App() {
  return (
  
      <Routes>
        <Route path="/" element={<Register/>} />
        <Route path="/homepage" element={<Navbar/>} />
        <Route path="/naagin" element={<ForgotPassword/>} />
        <Route path="/login" element={<Login/>} />
        {/* Add more routes for other pages */}
      </Routes>
   
  );
}

export default App;
