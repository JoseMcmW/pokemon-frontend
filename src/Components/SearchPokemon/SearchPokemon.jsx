import styles from "./searchPokemon.module.css";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchPokemons } from "../../redux/actions/actions";

export default function SearchBar({ refreshHandler }) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(searchPokemons(name));
    setName("");
  }

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
			event.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className={styles.searchContainer}>
      <label>Find a Pokemon:</label>
      <input
      className={styles.inputSearch}
        type="search"
        placeholder="Name..."
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        value={name}
      />
      <button onClick={handleSubmit} className={styles.buttonSearch}>Search</button>
      <button onClick={refreshHandler} className={styles.buttonSearch}>Reset</button>
    </div>
  );
}
