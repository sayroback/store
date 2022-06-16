import React from "react";
import { Icon } from "../components/icons/Icon";
import { ProductResume } from "../components/ProductResume";
import { TotalCart } from "../components/TotalCart";

export const ShoppingCart = () => {
  return (
    <main className="shopping-cart">
      <h1 className="my-orders__title">Shopping cart</h1>
      <ProductResume>
        <Icon>do_not_disturb_on</Icon>
      </ProductResume>
      <ProductResume>
        <Icon>do_not_disturb_on</Icon>
      </ProductResume>
      <ProductResume>
        <Icon>do_not_disturb_on</Icon>
      </ProductResume>
      <ProductResume>
        <Icon>do_not_disturb_on</Icon>
      </ProductResume>
      <ProductResume>
        <Icon>do_not_disturb_on</Icon>
      </ProductResume>

      <TotalCart />
    </main>
  );
};
