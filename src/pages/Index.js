// src/pages/Index.js
import React from "react";
import Header from "../components/Header";
import ChartSection from "../components/ChartSection";
import Information from "../components/Information"
import Footer from '../components/Footer';

const Index = () => {
    return (
        <div className="app">
          <Header />
          <ChartSection />
          <Information />
          <Footer />
        </div>
    );
};

export default Index;