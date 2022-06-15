import React from "react";
import { TextLink } from "../TextLink";

export const MenuProfile = () => {
  return (
    <>
      <ul className="menu-profile__box__list">
        <li className="menu-profile__box__list__item">My orders</li>
        <li className="menu-profile__box__list__item">My account</li>
      </ul>
      <TextLink
        className="menu-profile__box__link"
        link={"Login"}
        url={"/login"}
      />
    </>
  );
};
