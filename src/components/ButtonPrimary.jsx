import React from "react";

export const ButtonPrimary = ({ children, ...rest }) => {
  return (
    <>
      <button className="button-primary">{children}</button>
    </>
  );
};
