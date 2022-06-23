import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ListCategories } from "../components/Header/ListCategories";
import Pagination from "../components/Pagination";
import { ProductHome } from "../components/ProductHome";
import { SearchBar } from "../components/SearchBar";
import { Context } from "../data/Context";

export const Home = () => {
  const { products, getProductForCategory } = useContext(Context);
  const params = useParams();

  useEffect(() => {
    getProductForCategory(params.id);
  }, []);

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
        <Pagination />
      </main>
    </div>
  );
};
