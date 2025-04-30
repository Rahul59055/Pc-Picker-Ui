import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";

import Home from "./components/Home";
import PCPicker from "./components/PCPicker";
import PCSummaryPage from "./components/PCSummaryPage";

function App() {
  return (
    <div className="App">
      <nav className="nav-bar">
        <NavLink to="/" className="nav-link" end>
          Home
        </NavLink>
        <NavLink to="/builder" className="nav-link">
          Build PC
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/builder" element={<PCPicker />} />
        <Route path="/summary" element={<PCSummaryPage />} />
      </Routes>
    </div>
  );
}

export default App;
