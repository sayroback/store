import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/store.scss";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { NewPassword } from "./pages/NewPassword";

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/new_password" element={<NewPassword />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
