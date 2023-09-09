// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from './components/register/register';

function App() {
  return (
  
      <Routes>
        <Route path="/" element={<Register/>} />
        {/* Add more routes for other pages */}
      </Routes>
   
  );
}

export default App;
