// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from './components/register/register';
import ForgotPassword from './components/forgotpass/forgotpass';
import Login from './components/login/Login';
import DisasterReliefApp from './components/homepg/homepage';
import Profile from './components/userprofile/userprofile';


function App() {
  return (
  
      <Routes>
        <Route path="/register" element={<Register/>} />
        <Route path="/homepage" element={<DisasterReliefApp/>} />
        <Route path="/forgotpass" element={<ForgotPassword/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/" element={<Login/>} />
        {/* Add more routes for other pages */}
      </Routes>
   
  );
}

export default App;
