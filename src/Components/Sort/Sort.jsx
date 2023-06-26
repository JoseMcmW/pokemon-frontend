import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  orderByAttack,
  orderAlphabetic,
} from "../../redux/actions/actions";
import style from "./sort.module.css";

export const SortByAttack = ({setPaginatedSort}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(orderByAttack());
  }, [dispatch]);

  const handleSortAttack = (event) => {
    event.preventDefault();
    dispatch(orderByAttack(event.target.value));
    setPaginatedSort(event.target.value)
  };

  return (
    <div className={style.containerAttack}>
      <label>Attack:</label>
      <select onChange={handleSortAttack}>
        <option value="All">All</option>
        <option value="Descending">Strong</option>
        <option value="Ascending">Weak</option>
      </select>
    </div>
  );
};

export const SortByAlphabet = ({setPaginatedSort}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(orderAlphabetic());
  }, [dispatch]);

  const handleSortAlphabetic = (event) => {
    event.preventDefault();
    dispatch(orderAlphabetic(event.target.value));
    setPaginatedSort(event.target.value)
  };

  return (
    <div className={style.containerAlphabet}>
      <label>Alfabetic:</label>
      <select onChange={handleSortAlphabetic}>
        <option value="All">All</option>
        <option value="A to Z">A - Z</option>
        <option value="Z to A">Z - A</option>
      </select>
    </div>
  );
};
