import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../../data/Context";

export const ListCategories = ({ active, ...rest }) => {
  const { categories } = useContext(Context);

  return (
    <div id={`${rest.id}`} className={`${rest.className}__container`}>
      <ul className={`${rest.className}`}>
        <NavLink
          to={`/`}
          className={({ isActive }) => (isActive ? `link ${active}` : "link")}
        >
          <li className={`${rest.className}__item`}>All</li>
        </NavLink>
        {!!categories &&
          categories.map((category, key) => {
            return (
              <NavLink
                to={`/category/${category.name}`}
                className={({ isActive }) =>
                  isActive ? `link ${active}` : "link"
                }
                key={category.id}
              >
                <li className={`${rest.className}__item`}>{category.name}</li>
              </NavLink>
            );
          })}
      </ul>
    </div>
  );
};
