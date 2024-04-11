import React, { useState, useEffect, useRef } from 'react';
import logo from '../images/logo-black.png';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
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
              <img src={logo} alt="Logo" style={{padding:"12px"}}/>
            </Link>
          </div>
          <nav className={isMenuOpen ? 'active' : ''}>
            <ul>
              <li><Link to="/research" className={isActive(['/research'])} onClick={toggleMenu}>Research</Link></li>
              <li><a target="_blank" rel="noopener noreferrer" href="https://dcgen.gitbook.io/dcgen/">Documentation </a></li>
              <li>
                <Button
                    as="a"
                    href="https://app.dcgen.finance/swap"
                    target="_blank"
                    rel="noopener noreferrer"
                    height="40px"
                    px={10}
                >
                    App
                </Button>
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
