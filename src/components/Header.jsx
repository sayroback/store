import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "./Icon";
import { Logo } from "./Logo";

export const Header = () => {
  return (
    <div className="header">
      <Icon id="herder-icon">menu</Icon>
      <Link to="/" className="header__logo">
        <Logo id="header" />
      </Link>
      <Icon id="herder-icon">shopping_cart</Icon>
    </div>
  );
};
