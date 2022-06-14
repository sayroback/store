import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "./Icon";
import { ListCategories } from "./ListCategories";
import { Logo } from "./Logo";

export const Header = () => {
  return (
    <div className="header">
      <Icon id="herder-icon">menu</Icon>
      <div className="header-left">
        <Link to="/" className="header__logo">
          <Logo id="header__logo" />
        </Link>
        <ListCategories id="header__list" />
      </div>
      <Icon>shopping_cart</Icon>
    </div>
  );
};
