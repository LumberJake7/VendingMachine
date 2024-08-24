import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import VendingMachine from "./VendingMachine";
import Chips from "./Snack";
import Soda from "./Soda";
import Candy from "./Candy";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<VendingMachine />} />
        <Route path="/chips" element={<Chips />} />
        <Route path="/soda" element={<Soda />} />
        <Route path="/candy" element={<Candy />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
