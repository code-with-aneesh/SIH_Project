// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from './components/register/register';
import Navbar from './components/homepage/Navbar/Navbar';

function App() {
  return (
  
      <Routes>
        <Route path="/" element={<Register/>} />
        <Route path="/homepage" element={<Navbar/>} />
        {/* Add more routes for other pages */}
      </Routes>
   
  );
}

export default App;
