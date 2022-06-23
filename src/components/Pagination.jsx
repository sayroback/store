import React, { useState } from "react";
import { Icon } from "./icons/Icon";

const Pagination = () => {
  var [numberPage, setNumberPage] = useState(1);

  const lengthProducts = 200;
  const totalPages = Math.ceil(lengthProducts / 12);

  var pageInitial = 2;
  var pageFinal = pageInitial + 5;

  console.log(numberPage);

  if (numberPage >= totalPages - 3) {
    pageInitial = totalPages - 5;
    pageFinal = totalPages;
    console.log(pageInitial);
  } else if (numberPage >= 6) {
    pageInitial = numberPage - 2;
    pageFinal = pageInitial + 5;
  }

  let buttons = [];
  for (let index = pageInitial; index < pageFinal; index++) {
    if (index === totalPages) {
    } else {
      buttons.push(
        <button
          className={
            numberPage === index
              ? "pagination__item activeButton"
              : "pagination__item"
          }
          onClick={() => setNumberPage(index)}
          key={index}
        >
          {index}
        </button>
      );
    }
  }

  return (
    <div className="pagination--container">
      <div className="pagination">
        <button
          className="pagination__item"
          onClick={() => setNumberPage((numberPage -= 1))}
        >
          <Icon className="pagination__item__arrow">
            keyboard_double_arrow_left
          </Icon>
        </button>
        <div className="pagination__container-numbers">
          <button
            className={
              numberPage === 1
                ? "pagination__item activeButton"
                : "pagination__item"
            }
            onClick={() => setNumberPage(1)}
          >
            1
          </button>
          {pageInitial >= 4 && (
            <button className="pagination__item">...</button>
          )}
          {buttons}
          {pageFinal !== totalPages && (
            <button className="pagination__item">...</button>
          )}
          <button
            className={
              numberPage === totalPages
                ? "pagination__item activeButton"
                : "pagination__item"
            }
            onClick={() => setNumberPage(totalPages)}
          >
            {totalPages}
          </button>
        </div>
        {numberPage !== totalPages && (
          <button
            className="pagination__item next"
            onClick={() => setNumberPage((numberPage += 1))}
          >
            <Icon className="pagination__item__arrow">
              keyboard_double_arrow_right
            </Icon>
          </button>
        )}
      </div>
    </div>
  );
};

export default Pagination;
