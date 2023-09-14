import React from 'react';
import './Navbar.css'; 
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Navbar() {
  return (
    <nav className="navbar">
     <span className="app-name">ResQConnect</span>
     <div className="search-bar">
            <input type="text" placeholder="Search Anything..." className="search-input" />
            <button className="search-button">Search</button>
     </div>
     <div className="navbar-right">
          <ul className="nav-links">
            <li className="nav-link">
              <a href="/" className="nav-link-text">Home</a>
            </li>
            <li className="nav-link">
              <a href="/about" className="nav-link-text">About</a>
            </li>
            <li className="nav-link">
              <a href="/profile" className="nav-link-icon">
                <AccountCircleIcon/>
              </a>
            </li>
            <li className="nav-link">
              <a href="/EntryPage" className="nav-link-icon">
                <LogoutIcon/>
              </a>
            </li>
          </ul>
        </div>
    </nav>
  );
}

export default Navbar;
