import React, { useState } from "react";
import styled from "styled-components";
import { Header } from "../components/Header";
import { ListCategories } from "../components/ListCategories";
import { Product } from "../components/Product";
import { SearchBar } from "../components/SearchBar";
import { Sidebar } from "../components/Sidebar";

export const HomeUI = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const SidebarView = styled.div`
    display: ${!!sidebarOpen ? "block" : "none"};
  `;

  return (
    <>
      <div>
        <Header setSidebarOpen={setSidebarOpen} />
        <main>
          <SidebarView>
            <Sidebar />
          </SidebarView>
          <SearchBar />
          <ListCategories className="list-categories__container" />
          <Product />
        </main>
      </div>
    </>
  );
};
