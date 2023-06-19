import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllPokemons, searchPokemons } from "../../redux/actions/actions";
import style from "./home.module.css";
import Card from "../Card/Card";
import SearchBar from "../SearchPokemon/SearchPokemon";
import { FilteredByOrigin, FilteredByType } from "../Filters/Filters";
import { SortByAttack, SortByAlphabet } from "../Sort/Sort";
import Paginate from "../Paginate/Paginate";

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
    setCurrentPage(1); // Reiniciar la página actual al actualizar los datos
    dispatch(getAllPokemons());
  }

  function handleSearch(name) {
    dispatch(searchPokemons(name));
    setCurrentPage(1); // Reiniciar la página actual al realizar una búsqueda.
  }

  return (
    <div className={style.homeContainer}>
      <div className={style.filtersComponent}>
        <SortByAttack />
        <SortByAlphabet />
        <FilteredByOrigin />
        <FilteredByType />
        <SearchBar refreshHandler={refreshHome} onSearch={handleSearch}/>
      </div>
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
    </div>
  );
};

export default Home;
