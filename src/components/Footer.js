// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';
import logo from "../images/logo-white.png"
import x from "../icons/x.svg"
import discord from "../icons/discord.svg"
import gitbook from "../icons/gitbook.svg"
import github from "../icons/github.svg"
import telegram from "../icons/telegram.svg"

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
                    <a href="#link1"><img src={x} alt="X Icon" /></a>
                    <a href="#link2"><img src={discord} alt="Discord Icon" /></a>
                    <a href="#link3"><img src={telegram} alt="Telegram Icon" /></a>
                    <a href="#link4"><img src={github} alt="GitHub Icon" /></a>
                    <a href="#link5"><img src={gitbook} alt="GitBook Icon" /></a>
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
                <Link to="/research">Research</Link>
            </div>
        </footer>
    );
};

export default Footer;
