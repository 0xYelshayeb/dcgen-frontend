// src/components/Header.js

import React, { useState } from 'react';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <nav className={isMenuOpen ? 'active' : ''}>
        <ul>
          <li><Link to="/ethereum-index" onClick={toggleMenu}>Ethereum index</Link></li>
          <li><Link to="/arbitrum-index" onClick={toggleMenu}>Arbitrum index</Link></li>
          <li><Link to="/research" onClick={toggleMenu}>Research</Link></li>
          <li>
            <Link to="/index-products" className="special-button" onClick={toggleMenu}>
              Index products 
              <span className="external-link-icon">🔗</span>
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
