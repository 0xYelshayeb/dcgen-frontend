// src/pages/NotFound.js
import React from "react";
import { Link } from 'react-router-dom';
import Header from "../components/Header";
import Footer from '../components/Footer';
import '../styles/notFound.css'; // Import styles

const NotFound = () => {
  return (
    <div className="not-found-app">
      <Header />
      <div className="not-found-content">
        <h1>404: Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <Link to="/">Go Back Home</Link>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
