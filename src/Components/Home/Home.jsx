import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  deletePokemon,
  getAllPokemons,
  searchPokemons,
} from "../../redux/actions/actions";
import style from "./home.module.css";
import Card from "../Card/Card";
import SearchBar from "../SearchPokemon/SearchPokemon";
import { FilteredByOrigin, FilteredByType } from "../Filters/Filters";
import { SortByAttack, SortByAlphabet } from "../Sort/Sort";
import Paginate from "../Paginate/Paginate";
import loader from "../../img/loader.gif";

const Home = () => {
  const dispatch = useDispatch();
  const allPokemonsState = useSelector((state) => state.pokemons);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; //Numero de elementos por pagina.

  //Calculamos el índice inicial y final de los elementos a mostrar en cada página:
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = allPokemonsState.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const paginate = (pageNumber) => {
    //Creamos una funcion para cambiar de pagina.
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getAllPokemons());
  }, [dispatch]);

  function refreshHome(event) {
    event.preventDefault();
    window.location.reload();
  }

  function handleSearch(name) {
    setCurrentPage(1);
    dispatch(searchPokemons(name));
  }

  function setPaginatedFiltered(event) {
    if (event === "DB" || event === "Api") {
      setCurrentPage(1);
    } else {
      setCurrentPage(1);
    }
  }

  function setPaginatedSort(event) {
    if (event === "Descending" || event === "Ascending") {
      setCurrentPage(1);
    }
    if (event === "A to Z" || event === "Z to A") {
      setCurrentPage(1);
    }
  }

  function deletePoke(id, event) {
    //Eliminar Pokemon
    event.preventDefault();
    dispatch(deletePokemon(id));
    window.location.href = "https://pokemon-backend-production-74d4.up.railway.app/home";
  }

  return (
    <div className={style.homeContainer}>
      <div className={style.filtersComponent}>
        <div className={style.filters}>
          <h3>Order by:</h3>
          <SortByAttack setPaginatedSort={setPaginatedSort} />
          <SortByAlphabet setPaginatedSort={setPaginatedSort} />
        </div>
        <div className={style.filters}>
          <h3>Filter by:</h3>
          <FilteredByOrigin setPaginatedFiltered={setPaginatedFiltered} />
          <FilteredByType setPaginatedFiltered={setPaginatedFiltered} />
        </div>
        <SearchBar refreshHandler={refreshHome} onSearch={handleSearch} />
      </div>
      <div>
        {currentItems < 1 ? (
          <div className={style.loader}>
            <img src={loader} alt="loader..." />
          </div>
        ) : (
          <>
            <div className={style.cardsComponent}>
              {currentItems &&
                currentItems.map((pokemon, index) => {
                  return (
                    <Link
                      to={`/detail/${pokemon.id}`}
                      className={style.linkDetail}
                      key={index}
                    >
                      <Card
                        name={pokemon.name}
                        image={pokemon.image}
                        type={pokemon.type}
                        attack={pokemon.attack}
                        id={pokemon.id}
                        deletePoke={deletePoke}
                      />
                    </Link>
                  );
                })}
            </div>
            <Paginate
              allPokemons={allPokemonsState.length}
              itemsPerPage={itemsPerPage}
              paginate={paginate}
              currentPage={currentPage}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
