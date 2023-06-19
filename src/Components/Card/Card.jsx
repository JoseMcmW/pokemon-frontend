import React from "react";
import style from "./card.module.css";

const Card = ({ name, image, type }) => {
  return (
    <figure className={style.figure}>
      <img src={image} alt="img card not found." />
      <figcaption>
        <div className={style.name}>{name}</div>
        <div className={style.type}>{type.join(" - ")}</div>
      </figcaption>
    </figure>
  );
};

export default Card;
