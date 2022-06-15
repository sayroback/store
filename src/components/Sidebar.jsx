import React, { useContext } from "react";
import { Context } from "../data/Context";
import { TextLink } from "./TextLink";

export const Sidebar = () => {
  const { categories } = useContext(Context);

  return (
    <div className="sidebar">
      <h3 className="sidebar__title">CATEGORIES</h3>
      <ul className="sidebar__list">
        <li className="menu-profile__box__list__item">All</li>
        {!!categories &&
          categories.map((category, key) => (
            <li className="menu-profile__box__list__item" key={category.id}>
              {category.name}
            </li>
          ))}

        <li className="menu-profile__box__list__item my-orders">My orders</li>
        <li className="menu-profile__box__list__item">My account</li>
      </ul>
      <TextLink
        className="menu-profile__box__link"
        link={"Sing in"}
        url={"/login"}
      />
    </div>
  );
};
