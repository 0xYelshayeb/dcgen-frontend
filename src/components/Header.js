// src/components/Header.js

import React, { useState } from 'react';
import logo from '../images/logo.png';
import { Link, useLocation } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();  // Get the current location

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (paths) => {
    return paths.includes(location.pathname) ? 'active-link' : '';
  };

  return (
    <header>
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <nav className={isMenuOpen ? 'active' : ''}>
        <ul>
        <li><Link to="/ethereum-index" className={isActive(['/','/ethereum-index', '/ethereum-constituents'])} onClick={toggleMenu}>Ethereum Index</Link></li>
        <li><Link to="/arbitrum-index" className={isActive(['/arbitrum-index'])} onClick={toggleMenu}>Arbitrum Index</Link></li>
        <li><Link to="/research" className={isActive(['/research'])} onClick={toggleMenu}>Research</Link></li>
        <li><Link to="/documentation" className={isActive(['/documentation'])} onClick={toggleMenu}>Documentation</Link></li>
          <li>
            <Link to="/index-products" className="special-button" onClick={toggleMenu}>
              Index Products
              <span className="external-link-icon">
                <i className="fas fa-external-link-alt"></i>
              </span>
            </Link>
          </li>
        </ul>
      </nav>
      <button className="menu-toggle" onClick={toggleMenu}>
        {isMenuOpen ? 'x' : '☰'}
      </button>
    </header>
  );
};


export default Header;
