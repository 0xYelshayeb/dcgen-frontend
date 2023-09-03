// src/pages/NotFound.js
import React from "react";
import { Link } from 'react-router-dom';
import Layout from "../components/Layout";
import '../styles/notFound.css';

const NotFound = () => {
  const schema = {
    "@context": "https://dcgen.finance",
    "@type": "WebPage",
    "name": "Ethereum Index not found page",
    "description": "Page that loads when the requested page isn't found",
  };
  return (
    <Layout title="404 Not Found" name="Page not found" description="Page that loads when the requested page isn't found" schema={schema}>
      <div className="not-found-content">
        <h1>404: Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <Link to="/">Go Back Home</Link>
      </div>
    </Layout>
  );
};

export default NotFound;
