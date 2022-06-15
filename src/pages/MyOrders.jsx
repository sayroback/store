import React from "react";
import { OrderResume } from "../components/OrderResume";
import { ProductResume } from "../components/ProductResume";

export const MyOrders = () => {
  return (
    <main className="my-orders">
      <h1 className="my-orders__title">MyOrders</h1>
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
