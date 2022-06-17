import React, { createContext } from "react";
import { Categories } from "./getCategories";
import { GetProduct } from "./getProduct";
const Context = createContext();

const ContextProvider = (props) => {
  const { categories, getCategories } = Categories();
  const { products, getTenProducts, product, getOneProduct } = GetProduct();
  return (
    <Context.Provider
      value={{
        categories,
        getCategories,
        products,
        getTenProducts,
        product,
        getOneProduct,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
export { Context, ContextProvider };
