import React from "react";

export const Icon = ({ children, ...rest }) => {
  return (
    <span className={`material-symbols-outlined ${rest.className}`}>
      {children}
    </span>
  );
};
