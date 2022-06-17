import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../data/Context";
import { Icon } from "./icons/Icon";

export const ProductHome = () => {
  const { products } = useContext(Context);
  return (
    <>
      {!!products &&
        products.map((product, key) => {
          return (
            <Link
              className="link"
              key={product.id}
              to={`product/${product.id}`}
            >
              <div className="product">
                <img
                  src={product.images[0]}
                  alt="product"
                  className="product__img"
                />
                <div className="product__container__details">
                  <div>
                    <h3 className="product__title">{product.title}</h3>
                    <p className="product__description">
                      {product.description}
                    </p>
                  </div>
                  <div className="product__icon">
                    <Icon>add_shopping_cart</Icon>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
    </>
  );
};
