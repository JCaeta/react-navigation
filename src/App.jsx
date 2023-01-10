import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Component0 } from "./components/Component0";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/component0" element={<Component0 />} />
      </Routes>
    </Router>
  );
}

export default App;
