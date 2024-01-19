import React from "react";
import Card from "../Card/Card";
import style from "./cardsSearchContainer.module.css";

const CardsSearchContainer = ({ characters, onClose }) => {
  return (
    <div className={style.cardsBox}>
      <div className={style.cards}>
        {characters && characters.map(({ id, name, status, species, gender, image, origin }) => (
          <Card
            key={id}
            id={id}
            name={name}
            status={status}
            species={species}
            gender={gender}
            origin={origin.name}
            image={image}
            onClose={onClose}
          />
        ))}
      </div>
    </div>
  )
};

export default CardsSearchContainer;