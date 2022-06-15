import React from "react";
import { Icon } from "./icons/Icon";

export const SearchBar = () => {
  return (
    <div className="search-bar">
      <div className="search-bar__container">
        <Icon id="search-icon">search</Icon>
        <input
          className="search-bar__container__input"
          placeholder="Search product"
          type="text"
        />
      </div>
    </div>
  );
};
