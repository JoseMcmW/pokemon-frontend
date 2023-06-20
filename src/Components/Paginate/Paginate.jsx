import React from "react";
import style from "./paginate.module.css";

const Paginate = ({ allPokemons, itemsPerPage, paginate, currentPage }) => {
  const totalPages = Math.ceil(allPokemons / itemsPerPage); //Calculamos el numero de paginas

  return (
    <div className={style.pagination}>
      {Array.from({ length: totalPages }, (_, index) => ( //Array.from crea un nuevo Array de length totalPages. (_, index) representa los elementos del nuevo array.
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
