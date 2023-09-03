// src/pages/index.js
import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import IndexPage from "./pages/Index";
import Constituents from "./pages/Constituents";
import Contact from "./pages/Contact";
import Research from "./pages/Research";
import NotFound from "./pages/NotFound"; // Import NotFound
import ScrollToTop from "./components/ScrollToTop";
import ComingSoon from "./components/ComingSoon";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<IndexPage/>} />
        <Route path="/arbitrum-index" element={<ComingSoon/>} />
        <Route path="/ethereum-index" element={<IndexPage/>} />
        <Route path="/ethereum-constituents" element={<Constituents />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/research" element={<Research />} />
        <Route path="*" element={<NotFound />} /> {/* Default 404 route */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
