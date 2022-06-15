import React from "react";
import { TextLink } from "../TextLink";

export const MenuProfile = ({ ...rest }) => {
  return (
    <div className={`menu-profile ${rest.className}`}>
      <TextLink
        classLink={"menu-profile__link"}
        label={"My account"}
        url={"/my-order"}
      />
      <TextLink
        classLink={"menu-profile__link"}
        label={"My orders"}
        url={"/my-orders"}
      />
      <TextLink
        classLink={"menu-profile__link"}
        link={"Login"}
        url={"/login"}
      />
    </div>
  );
};
