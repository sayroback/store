import { useState } from "react";

export const useShoppingCart = () => {
  const [carl, setCarl] = useState({});
  console.log(carl);

  const addCarl = (props) => {
    let newProduct = carl;

    newProduct.push(newProduct);

    setCarl(newProduct);

    console.log(newProduct);
  };

  return { carl, setCarl, addCarl };
};
