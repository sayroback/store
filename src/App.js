import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/store.scss";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { NewPassword } from "./pages/NewPassword";
import PasswordRecovery2 from "./pages/PasswordRecovery2";
import { PasswordRecovery1 } from "./pages/PasswordRecovery1";
import { CreateAccount } from "./pages/CreateAccount";

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/" exact element={<Login />} />
          <Route path="/login/new_password" element={<NewPassword />} />
          <Route
            path="/login/password_recovery1"
            element={<PasswordRecovery1 />}
          />
          <Route
            path="/login/password_recovery2"
            element={<PasswordRecovery2 />}
          />
          <Route path="/singup" element={<CreateAccount />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
