import React from "react";
import style from "./card.module.css"

const Card = ({name, image, type}) => {
  return(
	<figure className={style.figure}>
		<img src={image} alt="img card not found."/>
		<figcaption>{name}</figcaption>
		<figcaption>{type}</figcaption>
	</figure>
	);
};

export default Card;
