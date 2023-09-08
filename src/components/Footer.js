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
            <div className="footer-section footer-section-logo">
                <div className="footer-logo">
                    <Link to="/">
                        <img src={logo} alt="DCgen Logo" />
                    </Link>
                </div>
                <div className="footer-icons">
                    <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/CodeForFinance"><img src={x} alt="X Icon" /></a>
                    <a target="_blank" rel="noopener noreferrer" href="#link2"><img src={discord} alt="Discord Icon" /></a>
                    <a target="_blank" rel="noopener noreferrer" href="#link3"><img src={telegram} alt="Telegram Icon" /></a>
                    <a target="_blank" rel="noopener noreferrer" href="#link4"><img src={github} alt="GitHub Icon" /></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://dcgen.gitbook.io/dcgen/"><img src={gitbook} alt="GitBook Icon" /></a>
                </div>
            </div>
            <div className="footer-sections-wrapper">
                <div className="footer-section footer-section-rest">
                    <h4>Community</h4>
                    <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/CodeForFinance">X (Twitter) </a>
                    <a target="_blank" rel="noopener noreferrer" href="#Telegram">Telegram </a>
                    <a target="_blank" rel="noopener noreferrer" href="#Discord">Discord </a>
                </div>
                <div className="footer-section footer-section-rest">
                    <h4>Resources</h4>
                    <a target="_blank" rel="noopener noreferrer" href="https://dcgen.gitbook.io/dcgen/">Documentation </a>
                    <a target="_blank" rel="noopener noreferrer" href="#Github">GitHub </a>
                    <Link to="/research">Research</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
