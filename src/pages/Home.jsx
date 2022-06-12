import React from "react";
import { Header } from "../components/Header";
import { ListCategories } from "../components/ListCategories";
import { Product } from "../components/Product";
import { SearchBar } from "../components/SearchBar";

export const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <SearchBar />
        <ListCategories />
        <Product />
      </main>
    </div>
  );
};
