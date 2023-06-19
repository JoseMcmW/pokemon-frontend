import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { typesPokemon } from "../../redux/actions/actions";
import style from "./FormCreatePokemon.module.css";

const FormCreatePokemon = () => {
  const pokemons = useSelector((state) => state.pokemons);
  const images = pokemons.map((img) => img.image);
  const [currentIndex, setCurrentIndex] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => {
      clearInterval(timer); // Limpia el temporizador al desmontar el componente
    };
  }, [images]);

  const types = useSelector((state) => state.types);

  useEffect(() => {
    dispatch(typesPokemon());
  }, [dispatch]);

  return (
    <div className={style.formCreateContainer}>
      <div className={style.imageContainer}>
        <img src={images[currentIndex]} alt="img card not found." />
      </div>
      <div className={style.formContainer}>
        <div>
          <h3>Create your Pokémon: {pokemons.name}</h3>
        </div>
        <div className={style.formCont}>
          <form action="">
            <div className={style.divInput}>
              <label htmlFor="">Name: </label>
              <input type="text" placeholder="Bulvasaur" />
            </div>
            <div className={style.divInput}>
              <label htmlFor="">Image: </label>
              <input type="text" placeholder="https://" />
            </div>
            <div className={style.divInput}>
              <label htmlFor="">Attack: </label>
              <input type="text" placeholder="0-99" />
            </div>
            <div className={style.divInput}>
              <label htmlFor="">Defense: </label>
              <input type="text" placeholder="0-99" />
            </div>
            <div className={style.divInput}>
              <label htmlFor="">Speed: </label>
              <input type="text" placeholder="0-99" />
            </div>
            <div className={style.divInput}>
              <label htmlFor="">Height: </label>
              <input type="text" placeholder="0-99" />
            </div>
            <div className={style.divInput}>
              <label htmlFor="">Weight: </label>
              <input type="text" placeholder="0-99" />
            </div>
            <div className={style.divInput}>
              <label>Type: </label>
              <select>
                {types?.map((t, index) => (
                  <option key={index} value={t.name}>
                    {t.name}
                  </option>
                ))}
              </select>
              {/*  nm nm */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormCreatePokemon;
