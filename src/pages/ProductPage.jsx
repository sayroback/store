import React, { useContext } from "react";
import { Product } from "../components/Product";
import { Context } from "../data/Context";
import { ProductHome } from "../components/ProductHome";

export const ProductPage = () => {
  const { products } = useContext(Context);

  return (
    <>
      <main>
        <Product />
        <h1>More</h1>
        <div className="products">
          <ProductHome products={products} />;
        </div>
      </main>
    </>
  );
};
