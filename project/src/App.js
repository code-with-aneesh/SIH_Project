// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from './components/register/register';
import Navbar from './components/homepage/Navbar/Navbar';

import ForgotPassword from './components/forgotpass/forgotpass';

function App() {
  return (
  
      <Routes>
        <Route path="/naagin" element={<Register/>} />
        <Route path="/homepage" element={<Navbar/>} />
        <Route path="/" element={<ForgotPassword/>} />
        {/* Add more routes for other pages */}
      </Routes>
   
  );
}

export default App;
