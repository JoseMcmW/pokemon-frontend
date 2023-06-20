import React from "react";
import style from "./card.module.css";

const Card = ({ id, name, image, type, onClose }) => {
  return (
    <figure className={style.figure}>
      <img src={image} alt="img card not found." />
      <figcaption>
        <div className={style.name}>{name}</div>
        <div className={style.type}>{type.join(" - ")}</div>
        {typeof id === "string" && id.includes("-") ? (
          <button onClick={() => onClose(id)}>X</button>
        ) : null}
      </figcaption>
    </figure>
  );
};

export default Card;
