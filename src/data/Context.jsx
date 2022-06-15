import React, { createContext } from "react";
import { Categories } from "./Categories";
const Context = createContext();

const ContextProvider = (props) => {
  const { categories, getCategories } = Categories();

  return (
    <Context.Provider
      value={{
        categories,
        getCategories,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
export { Context, ContextProvider };
