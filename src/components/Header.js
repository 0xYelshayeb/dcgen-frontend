// src/components/Header.js

import React from 'react';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <nav>
        <ul>
          <li><Link to="/ethereum-index">Ethereum index</Link></li>
          <li><Link to="/arbitrum-index">Arbitrum index</Link></li>
          <li><Link to="/research">Research</Link></li>
          <li><Link to="/index-products">Index products</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
