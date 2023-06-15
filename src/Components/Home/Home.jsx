import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { allPokemons } from '../../redux/actions/actions'
import style from './home.module.css';
import Card from '../Card/Card';

const Home = () => {
  const dispatch = useDispatch();
  const getAllPokemons = useSelector((state) => state.pokemons);

  useEffect(() => {
    dispatch(allPokemons())
  }, [])

  return (
    <div className={style.homeContainer}>
      <h1>Pokemones</h1>
      <div className={style.cardsComponent}>
        {getAllPokemons?.map((pokemon, index) => (
        <Card
          key={index}
          name={pokemon.name}
          image={pokemon.image}
          type={pokemon.type}
        />
        ))}
      </div>
    </div>
  );
};

export default Home;
