// src/components/Layout.js
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, title, name, description, schema }) => {
  return (
    <div className="app">
      <Helmet>
        <title>{title}</title>
        <meta name={name} content={description} />
        {schema && <script type="application/ld+json">{JSON.stringify(schema)}</script>}
      </Helmet>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
