import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  typesPokemon,
  updatePokemon,
  detailPokemon,
} from "../../redux/actions/actions";
import style from "./updatePokemon.module.css";
import { validate } from "../FormCreate/validate";

const UpdatePokemon = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const inputPokemons = useSelector((state) => state.detailPokemons);
  const types = useSelector((state) => state.types);
  const [error, setError] = useState({}); //ALmacenar errores

  useEffect(() => {
    dispatch(detailPokemon(id));
  }, [dispatch, id]);

  const [form, setForm] = useState({
    name: "",
    image: "",
    life: 0,
    attack: 0,
    defense: 0,
    speed: 0,
    height: 0,
    weight: 0,
    types: [],
  });

  useEffect(() => {
    if (inputPokemons) {
      setForm({
        name: inputPokemons.name || "",
        image: inputPokemons.image || "",
        life: inputPokemons.life || 0,
        attack: inputPokemons.attack || 0,
        defense: inputPokemons.defense || 0,
        speed: inputPokemons.speed || 0,
        height: inputPokemons.height || 0,
        weight: inputPokemons.weight || 0,
        types: inputPokemons.types || [],
      });
    }
  }, [inputPokemons]);

  const handleForm = (event) => {
    //Manejamos los cambios de estatos del formulario
    setForm({ ...form, [event.target.name]: event.target.value });
    setError(validate({ ...form, [event.target.name]: event.target.value }));
  };

  useEffect(() => {
    dispatch(typesPokemon());
  }, [dispatch]);

  function handleSelect(event) {
    const selectedType = event.target.options[event.target.selectedIndex].value;
    if (form.types.includes(selectedType)) {
      return window.alert("El tipo ya fue agregado.");
    }
    setForm({
      ...form,
      types: [...form.types, event.target.value],
    });

    setError(validate({ ...form, types: [...form.types, event.target.value] }));
  }

  const [boton, setBoton] = useState(true);
  //Verificamos que los inputs no tengan errores.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const hasErrors = () => {
    return Object.keys(error).some((key) => error[key]);
  };

  //Para saber que esta vacio el input
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const formEmpty = () => {
    return Object.values(form).every((value) => {
      if (typeof value === "string" || Array.isArray(value)) {
        return value.length === 0;
      } else if (typeof value === "number") {
        return value === 0;
      } else {
        return true; // Consideramos otros tipos de valores como vacíos
      }
    });
  };

  useEffect(() => {
    // Actualizar el estado del botón cuando cambien los errores
    setBoton(hasErrors() || formEmpty());
  }, [formEmpty, hasErrors]);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updatePokemon(id, form));
    setForm({
      name: "",
      image: "",
      life: 0,
      attack: 0,
      defense: 0,
      speed: 0,
      height: 0,
      weight: 0,
      types: [],
    });
    window.location.href = "https://pokemon-frontend-flax.vercel.app/home";
    /* window.location.href = "http://localhost:3000/home"; */
  };

  //Handler del botón para eliminar types seleccionados.
  const handleRemoveType = (index) => {
    const updatedTypes = [...form.types];
    updatedTypes.splice(index, 1);
    setForm({ ...form, types: updatedTypes });
  };

  return (
    <div className={style.formCreateContainer}>
      <div className={style.imageContainer}>
        <h3>{inputPokemons.name}</h3>
        <img src={inputPokemons.image} alt="img card not found." />
      </div>
      <div className={style.formContainer}>
        <div>
          <h3>Edit your Pokémon: </h3>
        </div>
        <div className={style.formCont}>
          <form onSubmit={handleSubmit}>
            <div className={style.divInput}>
              <label>Name: </label>
              <input
                type={"text"}
                placeholder="Bulvasaur"
                value={form.name}
                onChange={handleForm}
                name={"name"}
              />
            </div>
            <div className={style.error}>
              {error.name && <p className={style.warning}>{error.name}</p>}
            </div>
            <div className={style.divInput}>
              <label>Image: </label>
              <input
                placeholder="https://...png"
                type={"text"}
                value={form.image}
                onChange={handleForm}
                name={"image"}
              />
            </div>
            <div className={style.error}>
              {error.image && <p className={style.warning}>{error.image}</p>}
            </div>
            <div className={style.divInput}>
              <label>Attack: </label>
              <input
                type={"number"}
                value={form.attack}
                onChange={handleForm}
                name={"attack"}
                placeholder="0-130"
              />
            </div>
            <div className={style.error}>
              {error.attack && <p className={style.warning}>{error.attack}</p>}
            </div>
            <div className={style.divInput}>
              <label>Life: </label>
              <input
                type={"number"}
                value={form.life}
                onChange={handleForm}
                name={"life"}
                placeholder="0-130"
              />
            </div>
            <div className={style.error}>
              {error.life && <p className={style.warning}>{error.life}</p>}
            </div>
            <div className={style.divInput}>
              <label>Defense: </label>
              <input
                placeholder="0-130"
                type={"number"}
                value={form.defense}
                onChange={handleForm}
                name={"defense"}
              />
            </div>
            <div className={style.error}>
              {error.defense && (
                <p className={style.warning}>{error.defense}</p>
              )}
            </div>
            <div className={style.divInput}>
              <label>Speed: </label>
              <input
                placeholder="0-130"
                type={"number"}
                value={form.speed}
                onChange={handleForm}
                name={"speed"}
              />
            </div>
            <div className={style.error}>
              {error.speed && <p className={style.warning}>{error.speed}</p>}
            </div>
            <div className={style.divInput}>
              <label>Height: </label>
              <input
                placeholder="0-130"
                type={"number"}
                value={form.height}
                onChange={handleForm}
                name={"height"}
              />
            </div>
            <div className={style.error}>
              {error.height && <p className={style.warning}>{error.height}</p>}
            </div>
            <div className={style.divInput}>
              <label>Weight: </label>
              <input
                placeholder="0-130"
                type={"number"}
                value={form.weight}
                onChange={handleForm}
                name={"weight"}
              />
            </div>
            <div className={style.error}>
              {error.weight && <p className={style.warning}>{error.weight}</p>}
            </div>
            <div className={style.divInput}>
              <label>Type: </label>
              <select onChange={handleSelect}>
                {types?.map((type, index) => (
                  <option key={index} value={type.name}>
                    {type.name.charAt(0).toUpperCase() + type.name.slice(1)}
                  </option>
                ))}
              </select>
              <div className={style.listaTypes}>
                <ul>
                  {form.types.map((element, index) => (
                    <li key={index} className={style.mostrarTipos}>
                      {element.charAt(0).toUpperCase() + element.slice(1)}
                      <button onClick={() => handleRemoveType(index)}>x</button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={style.error}>
              {error.types && <p className={style.warning}>{error.types}</p>}
            </div>
            <div className={style.divButtonForm}>
              <button className={style.boton} disabled={boton} type="submit">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdatePokemon;
