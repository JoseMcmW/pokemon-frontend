import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllPokemons } from "../../redux/actions/actions";
import style from "./home.module.css";
import Card from "../Card/Card";
import SearchBar from "../SearchPokemon/SearchPokemon";
import { FilteredByOrigin, FilteredByType } from "../Filters/Filters";
import { SortByAttack, SortByAlphabet } from "../Sort/Sort";

const Home = () => {
  const dispatch = useDispatch();
  const allPokemonsState = useSelector((state) => state.pokemons);

  useEffect(() => {
    dispatch(getAllPokemons());
  }, [dispatch]);

  function refreshHome(event) {
    event.preventDefault();
    dispatch(getAllPokemons());
  }

  return (
    <div className={style.homeContainer}>
      <div className={style.filtersComponent}>
        <SortByAttack/>
        <SortByAlphabet/>
        <FilteredByOrigin/>
        <FilteredByType/>
        <SearchBar refreshHandler={refreshHome} />
      </div>
      <div className={style.cardsComponent}>
        {allPokemonsState &&
          allPokemonsState.map((pokemon, index) => {
            return (
              <Link to={`/detail/${pokemon.id}`} className={style.linkDetail} key={index}>
                  <Card
                    name={pokemon.name}
                    image={pokemon.image}
                    type={pokemon.type}
                  />
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Home;
