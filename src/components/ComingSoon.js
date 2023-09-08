// src/components/ComingSoon.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/comingSoon.css'; // Import styles

const ComingSoon = () => {
  return (
    <div className="coming-soon-content">
      <h1>Coming Soon</h1>
      <p>Stay tuned!</p>
      <Link className="no-corners" to="/">Go Back Home</Link>
    </div>
  );
};

export default ComingSoon;
