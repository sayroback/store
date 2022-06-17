import React, { useContext } from "react";
import { ListCategories } from "../components/Header/ListCategories";
import { ProductHome } from "../components/ProductHome";
import { SearchBar } from "../components/SearchBar";
import { Context } from "../data/Context";

export const Home = () => {
  const { products } = useContext(Context);
  return (
    <div>
      <main>
        <SearchBar />
        <ListCategories
          className="list-categories--home"
          active={"active--home"}
        />
        <div className="products">
          <ProductHome products={products} />
        </div>
      </main>
    </div>
  );
};
