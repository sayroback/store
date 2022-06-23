import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../data/Context";
import { Icon } from "./icons/Icon";

export const ProductHome = ({ products }) => {
  const { addCarl } = useContext(Context);
  return (
    <>
      {!!products &&
        products.map((product, key) => {
          return (
            <div key={product.id} className="product">
              <Link
                reloadDocument
                className="link"
                to={`../product/${product.id}`}
              >
                <img
                  src={product.images[0]}
                  alt="product"
                  className="product__img"
                />
              </Link>
              <div className="product__container__details">
                <Link
                  reloadDocument
                  className="link"
                  to={`../product/${product.id}`}
                >
                  <div>
                    <h3 className="product__title">{product.title}</h3>
                    <p className="product__description">
                      {product.description}
                    </p>
                  </div>
                </Link>
                <div onClick={() => addCarl(product)} className="product__icon">
                  <Icon>add_shopping_cart</Icon>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};
