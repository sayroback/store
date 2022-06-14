import React, { useContext } from "react";
import { Context } from "../data/Context";
import { MenuProfile } from "./MenuProfile";

export const Sidebar = () => {
  const { categories } = useContext(Context);

  return (
    <div className="sidebar">
      <h3>CATEGORIES</h3>
      <ul className="sidebar__list">
        <li className="menu-profile__box__list__item">All</li>
        {!!categories &&
          categories.map((category, key) => (
            <li className="menu-profile__box__list__item" key={category.id}>
              {category.name}
            </li>
          ))}
      </ul>
      <MenuProfile />
    </div>
  );
};
