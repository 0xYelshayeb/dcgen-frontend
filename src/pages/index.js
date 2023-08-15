// src/pages/index.js
import React from "react";
import Header from "../components/Header";
import { BrowserRouter as Router } from 'react-router-dom';
import ChartSection from "../components/ChartSection";
import Information from "../components/Information"
import Footer from '../components/Footer';

const IndexPage = () => {

  return (
    <Router>
      <div className="app">
        <Header />
        <ChartSection />
        <Information />
        <Footer />
      </div>
    </Router>
  );
};

export default IndexPage;
