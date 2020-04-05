import React from "react";
import "./pagination.css";

const Pagination = ({ cardsPerPage, totalCards, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="pagination">
      {pageNumbers.map((number) => (
        <button
          key={number}
          className={number === currentPage ? "num num--active" : "num"}
          onClick={() => paginate(number)}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
