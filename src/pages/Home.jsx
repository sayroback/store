import React from "react";
import { ListCategories } from "../components/Header/ListCategories";
import { Product } from "../components/Product";
import { SearchBar } from "../components/SearchBar";

export const Home = () => {
  return (
    <div>
      <main>
        <SearchBar />
        <ListCategories className="list-categories__container" />
        <Product />
      </main>
    </div>
  );
};
