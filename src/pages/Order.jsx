import React from "react";
import { OrderResume } from "../components/OrderResume";
import { ProductResume } from "../components/ProductResume";

export const Order = () => {
  return (
    <main className="my-orders">
      <h1 className="my-orders__title">My order</h1>
      <OrderResume />
      <ProductResume />
      <ProductResume />
      <ProductResume />
      <ProductResume />
      <ProductResume />
      <ProductResume />
    </main>
  );
};
