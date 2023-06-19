import React, { useEffect } from "react";
/* import style from "./DetailPokemon.module.css"; */
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { detailPokemon } from "../../redux/actions/actions";
import style from "./DetailPokemon.module.css";

const CardDetail = () => {
	const dispatch = useDispatch();
  const { id } = useParams();
	const detail = useSelector((state) => state.detailPokemons);

	useEffect(() => {
		dispatch(detailPokemon(id))
	}, [dispatch, id])

  return (
    <div className={style.detailContainer}>
      <div className={style.imageContainer}>
        <h3>Detail Pokémon: {detail.name}</h3>
        <img src={detail.image} alt="img card not found." />
      </div>
      <div className={style.dataContainer}>
        <p><span>Type:</span> {detail.types}</p>
        <p><span>Height:</span> {detail.height}</p>
        <p><span>Weight:</span> {detail.weight}</p>
        <p><span>Life:</span> {detail.hp || detail.life}</p>
        <p><span>Defense:</span> {detail.defense}</p>
        <p><span>Speed:</span> {detail.speed}</p>
        <p><span>Attack:</span> {detail.attack}</p>
      </div>
    </div>
  );
};

export default CardDetail;
