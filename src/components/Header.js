import React, { useState } from 'react';
import logo from '../images/logo.png';
import { Link, useLocation } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (paths) => {
    return paths.includes(location.pathname) ? 'active-link' : '';
  };

  return (
    <header className={isMenuOpen ? 'menu-open' : ''}>
      <div className="menu-container">
        <div className="logo-container">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <nav className={isMenuOpen ? 'active' : ''}>
          <ul>
          <li><Link to="/ethereum-index" className={isActive(['/','/ethereum-index', '/ethereum-constituents'])} onClick={toggleMenu}>Ethereum Index</Link></li>
          <li><Link to="/arbitrum-index" className={isActive(['/arbitrum-index'])} onClick={toggleMenu}>Arbitrum Index</Link></li>
          <li><Link to="/research" className={isActive(['/research'])} onClick={toggleMenu}>Research</Link></li>
          <li><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">Documentation </a></li>
            <li>
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" className="special-button" onClick={toggleMenu}>
                Index Products
                <span className="external-link-icon">
                  <i className="fas fa-external-link-alt"></i>
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        {isMenuOpen ? 'x' : '☰'}
      </button>
    </header>
  );
};

export default Header;
