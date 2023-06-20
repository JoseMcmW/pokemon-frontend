import styles from "./searchPokemon.module.css";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchPokemons } from "../../redux/actions/actions";

export default function SearchBar({ refreshHandler, onSearch }) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(searchPokemons(name));
    onSearch(name);
    setName("");
  }

  //Búsqueda en el Search presionando la tecla enter
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSubmit(event);
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
        onKeyDown={(event) => handleKeyPress(event)}
        value={name}
      />
      <button onClick={handleSubmit} className={styles.buttonSearch}>
        Search
      </button>
      <button onClick={refreshHandler} className={styles.buttonSearch}>
        Reset
      </button>
    </div>
  );
}
