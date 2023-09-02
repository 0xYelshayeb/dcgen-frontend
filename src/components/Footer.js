// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';
import logo from "../images/logo-white.png"

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-section">
                <div className="footer-logo">
                    <Link to="/">
                        <img src={logo} alt="DCgen Logo" />
                    </Link>
                </div>
                <div className="footer-icons">
                    <a href="#link1"><i className="fas fa-x"></i></a>
                    <a href="#link2"><i className="fab fa-discord"></i></a>
                    <a href="#link3"><i className="fab fa-telegram"></i></a>
                    <a href="#link4"><i className="fab fa-github"></i></a>
                    <a href="#link5"><i className="fas fa-gitbook"></i></a>
                </div>
            </div>
            <div className="footer-section">
                <h4>Community</h4>
                <a href="https://www.facebook.com/YourPage/">Twitter </a>
                <a href="https://www.twitter.com/YourPage/">Telegram </a>
                <a href="https://www.instagram.com/YourPage/">Discord </a>
            </div>
            <div className="footer-section">
                <h4>Resources</h4>
                <a href="https://www.facebook.com/YourPage/">Documentation </a>
                <a href="https://www.twitter.com/YourPage/">GitHub </a>
                <a href="https://www.instagram.com/YourPage/">Research </a>
            </div>
        </footer>
    );
};

export default Footer;
