import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoleSelection from "./pages/RoleSelection";
import CourierRegister from "./pages/CourierRegister";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RoleSelection />} />
        <Route path="/courier-register" element={<CourierRegister />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;