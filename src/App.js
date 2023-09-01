// src/pages/index.js
import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import IndexPage from "./pages/Index"
import Constituents from "./pages/Constituents"
import Contact from "./pages/Contact"
import Research from "./pages/Research"

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage/>} />
        <Route path="/ethereum-index" element={<IndexPage/>} />
        <Route path="/constituents" element={<Constituents />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/research" element={<Research />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;