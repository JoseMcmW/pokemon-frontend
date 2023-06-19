import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  getAllPokemons,
  orderByAttack,
  orderAlphabetic,
} from "../../redux/actions/actions";
import style from "./sort.module.css";

export const SortByAttack = () => {
  const dispatch = useDispatch();
  const [, /* reload */ setReload] = useState(false);

  useEffect(() => {
    dispatch(getAllPokemons());
  }, [dispatch]);

  const handleSortAttack = (event) => {
    event.preventDefault();
    dispatch(orderByAttack(event.target.value));
    setReload((prevState) => !prevState);
  };

  return (
    <div className={style.containerAttack}>
      <label>Attack</label>
      <select onChange={handleSortAttack}>
        <option>Choose</option>
        <option value="Descending">Weak</option>
        <option value="Ascending">Strong</option>
      </select>
    </div>
  );
};

export const SortByAlphabet = () => {
  const dispatch = useDispatch();
  const [, /* reload */ setReload] = useState(false);

  useEffect(() => {
    dispatch(getAllPokemons());
  }, [dispatch]);

  const handleSortAlphabetic = (event) => {
    event.preventDefault();
    dispatch(orderAlphabetic(event.target.value));
    setReload((prevState) => !prevState);
  };

  return (
    <div className={style.containerAlphabet}>
      <label>Orden Alfabetico</label>
      <select onChange={handleSortAlphabetic}>
        <option>Choose</option>
        <option value="A to Z">A - Z</option>
        <option value="Z to A">Z - A</option>
      </select>
    </div>
  );
};
