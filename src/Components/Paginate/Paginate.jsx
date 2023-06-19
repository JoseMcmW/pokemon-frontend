import React from "react";
import style from "./paginate.module.css";

const Paginate = ({ allPokemons, itemsPerPage, paginate, currentPage }) => {
  const totalPages = Math.ceil(allPokemons / itemsPerPage);

  return (
    <div className={style.pagination}>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => paginate(index + 1)}
          className={currentPage === index + 1 ? style.active : ""}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Paginate;
