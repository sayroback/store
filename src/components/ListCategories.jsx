import React, { useContext } from "react";
import { Context } from "../data/Context";

export const ListCategories = ({ ...rest }) => {
  const { categories } = useContext(Context);

  console.log(categories);

  return (
    <div id={`${rest.id}`} className={`${rest.className}`}>
      <ul className={`list-categories--home ${rest.className}`}>
        <li className="list-categories--home__item active">All</li>
        {!!categories &&
          categories.map((category, key) => {
            return (
              <li className="list-categories--home__item" key={category.id}>
                {category.name}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

/* <li className="list-categories--home__item active">All</li>
<li className="list-categories--home__item">una</li>
<li className="list-categories--home__item">una</li>
<li className="list-categories--home__item">una</li>
<li className="list-categories--home__item">una</li>
<li className="list-categories--home__item">una</li>
<li className="list-categories--home__item">una</li> */
