import React, { useEffect } from "react";
import {
  filterOrigin,
  filterType,
  typesPokemon,
} from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import style from "./filters.module.css";

export const FilteredByOrigin = ({ setPaginatedFiltered }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterOrigin());
  }, [dispatch]);

  const handleOrigin = (event) => {
    dispatch(filterOrigin(event.target.value));
    setPaginatedFiltered(event.target.value);
  };

  return (
    <div className={style.originContainer}>
      <label>Origin:</label>
      <select onChange={handleOrigin}>
        <option value="All">All</option>
        <option value="DB">Data Base</option>
        <option value="Api">Api</option>
      </select>
    </div>
  );
};

export const FilteredByType = ({ setPaginatedFiltered }) => {
  const dispatch = useDispatch();
  const allTypes = useSelector((state) => state.types);

  useEffect(() => {
    dispatch(typesPokemon());
  }, [dispatch]);

  const handleType = (event) => {
    event.preventDefault();
    dispatch(filterType(event.target.value));
    setPaginatedFiltered(event.target.value);
  };

  return (
    <div className={style.typeContainer}>
      <label>Type:</label>
      <select onChange={handleType}>
        <option value="All">All</option>
        {allTypes.map((type, index) => (
          <option value={type.name} key={index}>
            {type.name.charAt(0).toUpperCase() + type.name.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};
