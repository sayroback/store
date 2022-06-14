import React from "react";

export const ListCategories = ({ ...rest }) => {
  return (
    <div id={`${rest.id}`} className={`${rest.className}`}>
      <ul className={`list-categories--home ${rest.className}`}>
        <li className="list-categories--home__item active">All</li>
        <li className="list-categories--home__item">una</li>
        <li className="list-categories--home__item">una</li>
        <li className="list-categories--home__item">una</li>
        <li className="list-categories--home__item">una</li>
        <li className="list-categories--home__item">una</li>
        <li className="list-categories--home__item">una</li>
      </ul>
    </div>
  );
};
