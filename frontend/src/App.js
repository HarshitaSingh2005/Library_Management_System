import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

import Admin from "./pages/Admin";
import IssuedBooks from "./pages/IssuedBooks";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/admin" element={<Admin />} />
         <Route path="/issued" element={<IssuedBooks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;