// src/pages/index.js
import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import IndexPage from "./pages/Index";
import Constituents from "./pages/Constituents";
import Research from "./pages/Research";
import NotFound from "./pages/NotFound"; // Import NotFound
import ScrollToTop from "./components/ScrollToTop";
import Arbitrum from "./pages/Arbitrum"
import ComingSoon from "./pages/ComingSoon";
import Waitlist from "./pages/Waitlist";
import Verification from "./pages/Verification";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/arbitrum-index" element={<Arbitrum />} />
        <Route path="/ethereum-index" element={<IndexPage />} />
        <Route path="/ethereum-constituents" element={<Constituents />} />
        <Route path="/research" element={<Research />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/waitlist/*" element={<Waitlist />} />
        <Route path="/verify" element={<Verification />} />
        <Route path="*" element={<NotFound />} /> {/* Default 404 route */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
