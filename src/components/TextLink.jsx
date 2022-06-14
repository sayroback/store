import React from "react";
import { Link } from "react-router-dom";

export const TextLink = ({ link, url, label, ...rest }) => {
  return (
    <Link className="login__link__a" to={url}>
      <div className={`login__link ${rest.className}`}>
        <small className="login__link__text"> {label}</small> {link}
      </div>
    </Link>
  );
};
