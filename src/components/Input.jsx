import React from "react";

export const Input = ({ label, ...rest }) => {
  return (
    <div className="input">
      <label className="input__label">{label}</label>
      <input {...rest} />
    </div>
  );
};
