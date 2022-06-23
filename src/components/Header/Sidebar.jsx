import React from "react";
import { ListCategories } from "./ListCategories";
import { MenuProfile } from "./MenuProfile";

export const Sidebar = ({ setSidebarOpen }) => {
  return (
    <div
      className="sidebar"
      onClick={() => setSidebarOpen((prevState) => !prevState)}
    >
      <h3 className="sidebar__title">CATEGORIES</h3>
      <ListCategories className="sidebar__list" active={"sidebar__item"} />
      <MenuProfile className={"sidebar__menu-profile"} />
    </div>
  );
};
