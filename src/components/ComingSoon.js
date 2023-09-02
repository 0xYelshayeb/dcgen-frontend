// src/components/ComingSoon.js
import React from 'react';
import { Link } from 'react-router-dom';
import Header from "../components/Header";
import Footer from '../components/Footer';
import '../styles/comingSoon.css'; // Import styles

const ComingSoon = () => {
  return (
    <div className="coming-soon-app">
      <Header />
      <div className="coming-soon-content">
        <h1>Coming Soon</h1>
        <p>This feature is under development. Stay tuned!</p>
        <Link to="/">Go Back Home</Link>
      </div>
      <Footer />
    </div>
  );
};

export default ComingSoon;
