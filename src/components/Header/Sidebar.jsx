import React from "react";
import { ListCategories } from "./ListCategories";
import { MenuProfile } from "./MenuProfile";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3 className="sidebar__title">CATEGORIES</h3>
      <ListCategories className="sidebar__list" active={"sidebar__item"} />
      <MenuProfile className={"sidebar__menu-profile"} />
    </div>
  );
};
