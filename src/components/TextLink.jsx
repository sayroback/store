import React from "react";
import { Link } from "react-router-dom";

export const TextLink = ({ link, url, label }) => {
  return (
    <div className="login__link">
      <small className="login__link__text">
        {label}{" "}
        <Link className="login__link__a" to={url}>
          {link}
        </Link>
      </small>
    </div>
  );
};
