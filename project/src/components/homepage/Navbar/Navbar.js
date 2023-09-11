import React from 'react';
import './Navbar.css'; 
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Navbar() {
  return (
    <nav className="navbar">
     <span className="app-name">Connect Agency</span>
     <div className="search-bar">
            <input type="text" placeholder="Search Anything..." />
            <button className="search-button">Search</button>
     </div>
     <div className="navbar-right">
          <ul className="nav-links">
            <li className="nav-link">
              <a href="/">Home</a>
            </li>
            <li className="nav-link">
              <a href="/about">About</a>
            </li>
            <li className="nav-link">
              <a href="/profile">
                <AccountCircleIcon/>
              </a>
            </li>
            <li className="nav-link">
              <a href="/EntryPage">
                <LogoutIcon/>
              </a>
            </li>
          </ul>
        </div>
    </nav>
  );
}

export default Navbar;