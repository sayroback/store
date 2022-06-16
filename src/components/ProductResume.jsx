import React from "react";

export const ProductResume = ({ children }) => {
  return (
    <div className="product-resume">
      <div className="product-resume--left">
        <img
          className="product-resume__image"
          src="https://http2.mlstatic.com/D_NQ_NP_855903-MLM50123088300_052022-O.webp"
          alt=""
        />
        <p className="product-resume__name">Colchón</p>
      </div>
      <div className="shopping-cart__left">
        <p className="product-resume__price">$ 120.00</p>
        <div>{children}</div>
      </div>
    </div>
  );
};
