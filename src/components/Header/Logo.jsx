import React from "react";
import { Icon } from "../icons/Icon";

export const Logo = ({ ...rest }) => {
  return (
    <div id={rest.id} className="logo">
      <Icon className="logo__icon">local_mall</Icon>
      <h1 className="logo__title">Store</h1>
    </div>
  );
};
