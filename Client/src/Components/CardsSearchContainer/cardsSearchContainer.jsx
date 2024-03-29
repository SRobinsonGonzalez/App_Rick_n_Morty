import React from "react";
import Card from "../Card/Card";
import style from "./cardsSearchContainer.module.css";

const CardsSearchContainer = ({ characters, onClose, toggleDetail }) => {
  const containerClassName = characters.length > 0 ? `${style.cards} ${style.withPadding}` : style.cards;
  
  return (
    <div className={style.cardsBox}>
      <div className={containerClassName}>
        {characters && characters.map(({ id, name, status, species, type, gender, origin, location, image, episode, url, created }) => (
          <Card
            key={id}
            id={id}
            name={name}
            status={status}
            species={species}
            type={type}
            gender={gender}
            origin={origin}
            location={location}
            image={image}
            episode={episode}
            url={url}
            created={created}
            onClose={onClose}
            toggleDetail={() => toggleDetail(id)}
          />
        ))}
      </div>
    </div>
  );
};

export default CardsSearchContainer;