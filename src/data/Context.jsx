import React, { createContext } from "react";
import { Categories } from "./getCategories";
import { GetProduct } from "./getProduct";
import { useShoppingCart } from "./useShoppingCart";
const Context = createContext();

const ContextProvider = (props) => {
  const { categories, getCategories } = Categories();
  const { carl, setCarl, addCarl } = useShoppingCart();
  const {
    products,
    getTenProducts,
    product,
    getOneProduct,
    getProductForCategory,
  } = GetProduct();
  return (
    <Context.Provider
      value={{
        categories,
        getCategories,
        products,
        getTenProducts,
        product,
        getOneProduct,
        getProductForCategory,
        carl,
        setCarl,
        addCarl,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
export { Context, ContextProvider };
