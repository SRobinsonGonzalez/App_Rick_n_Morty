import React from 'react';
import Card from '../Card/Card';
import style from './Cards.module.css'

function Cards({ characters, onClose }) {
   return (
      <div className={style.cardsBox}>
         <div className={style.cards}>
            {characters.map(({ id, name, status, species, gender, image, origin }) => (
               <Card
                  key={id}
                  id={id}
                  name={name}
                  status={status}
                  species={species}
                  gender={gender}
                  image={image}
                  origin={origin.name}
                  onClose={onClose}
               />
            ))}
         </div>
         <img className={style.sticker} src="./src/assets/img/01.png" />
      </div>
   )
}

export default Cards;