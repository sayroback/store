import React, { useContext, useEffect } from "react";
import { ButtonPrimary } from "./ButtonPrimary";
import { Icon } from "./icons/Icon";
import { useParams } from "react-router-dom";
import { Context } from "../data/Context";

export const Product = () => {
  const { getOneProduct, product } = useContext(Context);

  const params = useParams();

  useEffect(() => {
    getOneProduct(params);
  }, []);

  return (
    <aside className="product-page">
      {!!product && (
        <>
          <img
            className="product-page product__img"
            src={product.images[0]}
            alt=""
          />
          <p className="order-resume__total">{`$ ${product.price}.00`}</p>
          <p className="product__title">{product.title}</p>
          <p className="product__description">{product.description}</p>
          <ButtonPrimary className="product-page__button">
            <Icon className="product-page__button__icon">
              add_shopping_cart
            </Icon>
            <p>Add to cart</p>
          </ButtonPrimary>
        </>
      )}
    </aside>
  );
};
