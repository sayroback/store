import React from "react";
import { ButtonPrimary } from "./ButtonPrimary";
import { Icon } from "./icons/Icon";

export const Product = () => {
  return (
    <aside className="product-page">
      <img
        className="product-page product__img"
        src="https://http2.mlstatic.com/D_NQ_NP_855903-MLM50123088300_052022-O.webp"
        alt=""
      />
      <p className="order-resume__total">$210</p>
      <p className="product__title">Title</p>
      <p className="product__description">Description</p>
      <ButtonPrimary className="product-page__button">
        <Icon className="product-page__button__icon">add_shopping_cart</Icon>
        <p>Add to cart</p>
      </ButtonPrimary>
    </aside>
  );
};
