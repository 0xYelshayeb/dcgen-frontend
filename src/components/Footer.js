// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../images/logo-white.png";
import x from "../icons/x.svg";
import gitbook from "../icons/gitbook.svg";

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-logo-and-icons">
                <Link to="/">
                    <img className="footer-logo" src={logo} alt="DCgen Logo" />
                </Link>
                <div className="icons-container">
                    <a href="https://twitter.com/CodeForFinance" target="_blank" rel="noopener noreferrer">
                        <img className="footer-icon-x" src={x} alt="X Icon" />
                    </a>
                    <a href="https://dcgen.gitbook.io/dcgen/" target="_blank" rel="noopener noreferrer">
                        <img className="footer-icon-gitbook" src={gitbook} alt="GitBook Icon" />
                    </a>
                </div>
            </div>
            <div className="footer-links">
                <div className="community-section">
                    <h4 className="footer-heading">Community</h4>
                    <a href="https://twitter.com/CodeForFinance" target="_blank" rel="noopener noreferrer">X (Twitter)</a>
                    <a href="mailto:contact@dcgen.finance">Contact Us</a>
                </div>
                <div className="resources-section">
                    <h4 className="footer-heading">Resources</h4>
                    <a href="https://dcgen.gitbook.io/dcgen/" target="_blank" rel="noopener noreferrer">Documentation</a>
                    <Link to="/research">Research</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
