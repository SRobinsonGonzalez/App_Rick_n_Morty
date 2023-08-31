import React from 'react';
import Card from '../Card/Card';

function Cards({ characters, onClose }) {
   return (
      <div>
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
   )
}

export default Cards;