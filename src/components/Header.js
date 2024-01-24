import React, { useState, useEffect, useRef } from 'react';
import logo from '../images/logo.png';
import { Link, useLocation } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const headerRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (paths) => {
    return paths.includes(location.pathname) ? 'active-link' : '';
  };

  useEffect(() => {
    const setPadding = () => {
      if (headerRef.current) {
        const headerHeight = headerRef.current.offsetHeight;
        document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
      }
    };

    setPadding();
    window.addEventListener('resize', setPadding);

    return () => {
      window.removeEventListener('resize', setPadding);
    };
  }, [isMenuOpen]);

  return (
    <div className='header-container' ref={headerRef}>
      <header className={isMenuOpen ? 'menu-open' : ''}>
        <div className="menu-container">
          <div className="logo-container">
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <nav className={isMenuOpen ? 'active' : ''}>
            <ul>
              <li><Link to="/ethereum-index" className={isActive(['/', '/ethereum-index', '/ethereum-constituents'])} onClick={toggleMenu}>Ethereum Index</Link></li>
              <li><Link to="/arbitrum-index" className={isActive(['/arbitrum-index'])} onClick={toggleMenu}>Arbitrum Index</Link></li>
              <li><Link to="/research" className={isActive(['/research'])} onClick={toggleMenu}>Research</Link></li>
              <li><a target="_blank" rel="noopener noreferrer" href="https://dcgen.gitbook.io/dcgen/">Documentation </a></li>
              <li>
                <a target="_blank" rel="noopener noreferrer" className="special-button" href="https://app.dcgen.finance">Index Products
                  <span className="external-link-icon">
                    <i className="fas fa-external-link-alt"></i>
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
        </button>
      </header>
    </div>
  );
};

export default Header;
