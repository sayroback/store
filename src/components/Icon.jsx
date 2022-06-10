import React from "react";

const Icon = ({ children, ...rest }) => {
  return (
    <span className={`material-symbols-outlined ${rest.className}`}>
      {children}
    </span>
  );
};

export default Icon;
