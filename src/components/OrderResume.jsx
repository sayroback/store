import React from "react";

export const OrderResume = () => {
  return (
    <section className="order-resume">
      <div className="order-resume__details">
        <p className="order-resume__details__date">04.25.2021</p>
        <small className="order-resume__details__item-number">6 articles</small>
      </div>
      <div className="order-resume__total">
        <p>$ 120.00</p>
      </div>
    </section>
  );
};
