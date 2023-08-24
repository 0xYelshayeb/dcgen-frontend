// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
    
const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-section">
                <h4>Contact Us</h4>
                <p>123 Main St, Anytown, Anystate, 12345</p>
                <p>Email: info@example.com</p>
                <p>Phone: (123) 456-7890</p>
            </div>
            <div className="footer-section">
                <h4>Links</h4>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/constituents">Constituents</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/research">Research</Link></li>
                </ul>
            </div>
            <div className="footer-section">
                <h4>Follow Us</h4>
                <p>
                    <a href="https://www.facebook.com/YourPage/">Facebook </a>
                    <a href="https://www.twitter.com/YourPage/">Twitter </a>
                    <a href="https://www.instagram.com/YourPage/">Instagram</a>
                </p>
            </div>
            <div className="footer-section">
                <h4>© 2023 DCgen</h4>
            </div>
        </footer>
    );
};

export default Footer;
