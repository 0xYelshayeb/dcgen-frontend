// src/components/ComingSoon.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/comingSoon.css'; // Import styles

const ComingSoon = () => {
  return (
    <div className="coming-soon-content">
      <h1>Coming Soon</h1>
      <p>This feature is under development. Stay tuned!</p>
      <Link to="/">Go Back Home</Link>
    </div>
  );
};

export default ComingSoon;
