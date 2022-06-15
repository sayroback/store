import React from "react";
import { Link } from "react-router-dom";
import { OrderResume } from "../components/OrderResume";

export const MyOrders = () => {
  return (
    <main className="my-orders">
      <h1 className="my-orders__title">My orders</h1>
      <Link className="link-order" to="/order">
        <OrderResume />
      </Link>
      <OrderResume />
      <OrderResume />
      <OrderResume />
      <OrderResume />
      <OrderResume />
    </main>
  );
};
