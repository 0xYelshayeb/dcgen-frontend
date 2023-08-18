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
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <nav className={isMenuOpen ? 'active' : ''}>
        <ul>
          <li><Link to="/ethereum-index">Ethereum index</Link></li>
          <li><Link to="/arbitrum-index">Arbitrum index</Link></li>
          <li><Link to="/research">Research</Link></li>
          <li>
            <Link to="/index-products" className="special-button">
              Index products 
              <span className="external-link-icon">🔗</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
