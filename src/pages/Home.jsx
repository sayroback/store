import React from "react";
import { ListCategories } from "../components/Header/ListCategories";
import { ProductHome } from "../components/ProductHome";
import { SearchBar } from "../components/SearchBar";

export const Home = () => {
  return (
    <div>
      <main>
        <SearchBar />
        <ListCategories className="list-categories__container" />
        <div className="products">
          <ProductHome />
          <ProductHome />
          <ProductHome />
          <ProductHome />
          <ProductHome />
        </div>
      </main>
    </div>
  );
};
