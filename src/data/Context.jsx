import React, { createContext } from "react";
import { Categories } from "./Categories";
const Context = createContext();

const ContextProvider = (props) => {
  const { categories, setCategories } = Categories();

  return (
    <Context.Provider
      value={{
        categories,
        setCategories,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
export { Context, ContextProvider };
