import React from "react";

export const Titles = ({ title, subtitle }) => {
  return (
    <div>
      <h1 className="title">{title}</h1>
      <p className="subtitle">{subtitle}</p>
    </div>
  );
};
