import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "../../redux/Actions/actions";
import { useEffect, useState } from "react";
import style from "./Card.module.css";

function Card({ id, name, species, gender, status, origin, image, onClose }) {
   const myFavorites = useSelector((state) => state.myFavorites);
   const [isFav, setIsFav] = useState(false);
   const [closeButton, setCloseButton] = useState(true);
   const [randomColorStyle, setRandomColorStyle] = useState({ backgroundColor: '' })
   const dispatch = useDispatch()

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false),
         dispatch(removeFav(id));
      } else {
         setIsFav(true),
         dispatch(addFav({ id, name, species, gender, status, origin, image, onClose, addFav, removeFav }));
      };
   };

   useEffect(() => {
      if (!onClose) {
         setCloseButton(false);
      }
   }, []);

   useEffect(() => {
      myFavorites.forEach((favorite) => {
         if (favorite.id === id) {
            setIsFav(true);
         };
      });
   }, [myFavorites]);

   useEffect(() => {
      const randomColor = '#' + Math.round(Math.random() * 16777215).toString(16);
      setRandomColorStyle({ backgroundColor: randomColor })
   }, [])

   return (
      <div className={style.cardBox} style={randomColorStyle}>
         <div className={style.name}>
            <h1 className={style.nameOut}>{name}</h1>
            {/* <img src='' alt={`Imagen no encontrada de ${props.name}`} /> */}
         </div>
         <div className={style.detail}>
            <h1>Id: {id}</h1>
            <h3>Gender: {gender}</h3>
            <h3>Species: {species}</h3>
            {/* <h3>Status: {status}</h3> */}
            {/* <h4>Origin: {origin}</h4> */}
            <Link to={`/detail/${id}`}>
               <h1 className={style.nameIn}>{name}</h1>
            </Link>
            <br />
            {isFav ? (
               <button className={style.buttons} onClick={handleFavorite}>❤️</button>
            ) : (
               <button className={style.buttons} onClick={handleFavorite}>🤍</button>
            )}
         </div>
         <div className={style.imgBox} >
            <Link to={`/detail/${id}`}>
               <img className={style.imgCard} src={image} alt={name} />
            </Link>
         </div>
         {closeButton && <button className={style.closeButton} onClick={() => onClose(id)}>✖</button>}
      </div>
   );
}

export default Card;