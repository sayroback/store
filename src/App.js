import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/store.scss";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { NewPassword } from "./pages/NewPassword";
import PasswordRecovery2 from "./pages/PasswordRecovery2";
import { PasswordRecovery1 } from "./pages/PasswordRecovery1";
import { CreateAccount } from "./pages/CreateAccount";
import { Footer } from "./components/Footer";
import { ContextProvider } from "./data/Context";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Header/Sidebar";
import styled from "styled-components";
import { MyOrders } from "./pages/MyOrders";
import { Order } from "./pages/Order";
import { ProductPage } from "./pages/ProductPage";
import { ShoppingCart } from "./pages/ShoppingCart";

export const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const SidebarView = styled.div`
    display: ${!!sidebarOpen ? "block" : "none"};
  `;

  return (
    <ContextProvider>
      <BrowserRouter>
        <Header setSidebarOpen={setSidebarOpen} />
        <SidebarView>
          <Sidebar setSidebarOpen={setSidebarOpen} />
        </SidebarView>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:category/:id" element={<Home />} />
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
          <Route path="/sing-up" element={<CreateAccount />} />
          <Route path="/my-orders" element={<MyOrders />} />
          <Route path="/order" element={<Order />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ContextProvider>
  );
};
