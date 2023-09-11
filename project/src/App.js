// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from './components/register/register';
import Login from './components/register/Login';

function App() {
  return (
  
      <Routes>
        <Route path="/" element={<Register/>} />
        <Route path="/L" element={<Login/>} />
        {/* Add more routes for other pages */}
      </Routes>
   
  );
}

export default App;
