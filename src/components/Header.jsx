import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "./Icon";
import { ListCategories } from "./ListCategories";
import { Logo } from "./Logo";
import { MenuProfile } from "./MenuProfile";

export const Header = ({ setSidebarOpen }) => {
  const [menuProfile, setMenuProfile] = useState(false);
  return (
    <div className="header">
      <div
        id="herder-icon"
        onClick={() => setSidebarOpen((prevState) => !prevState)}
      >
        <Icon>menu</Icon>
      </div>
      <div className="header-left">
        <Link to="/" className="header__logo">
          <Logo id="header__logo" />
        </Link>
        <ListCategories id="header__list" />
      </div>
      <div className="header-right">
        <div
          className="menu-profile"
          onClick={() => setMenuProfile((prevState) => !prevState)}
        >
          <Icon className="menu-profile__icon">person</Icon>
          <div className="menu-profile__box">
            {!!menuProfile && <MenuProfile />}
          </div>
        </div>

        <Icon>shopping_cart</Icon>
      </div>
    </div>
  );
};
