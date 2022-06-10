import React from "react";

export const ButtonSecondary = ({ children, ...rest }) => {
  return (
    <>
      <button className="button-secondary">{children}</button>
    </>
  );
};
