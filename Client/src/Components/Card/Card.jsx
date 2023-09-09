import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/Actions/actions";
import { useEffect, useState } from "react";
import style from "./Card.module.css";

function Card({ id, name, species, gender, status, origin, image, onClose, addFav, removeFav, myFavorites }) {

   const [closeButton, setCloseButton] = useState(true);
   const [isFav, setIsFav] = useState(false);
   const [randomColorStyle, setRandomColorStyle] = useState({ backgroundColor: '' })

   useEffect(() => {
      if (!onClose) {
         setCloseButton(false);
      }
   }, []);

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false),
            removeFav(id);
      } else {
         setIsFav(true),
            addFav({ id, name, species, gender, status, origin, image, onClose, addFav, removeFav });
      };
   };

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
      <div className={style.cardStyle} style={randomColorStyle}>
         {isFav ? (
            <button onClick={handleFavorite}>❤️</button>
         ) : (
            <button onClick={handleFavorite}>🤍</button>
         )}
       
         <Link to={`/detail/${id}`}>
            <h2>{name}</h2>
            <h2>{species}</h2>
         </Link>
         <img className={style.imgCard} src={image} alt={name} />
     
         {closeButton && <button className={style.closeButton} onClick={() => onClose(id)}>✖</button>}
         {/* <h2>{gender}</h2> */}
         {/* <h2>{status}</h2> */}
         {/* <h2>{origin}</h2> */}
         {/* <img src='' alt={`Imagen no encontrada de ${props.name}`} /> */}
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (favorite) => {
         dispatch(addFav(favorite))
      },
      removeFav: (id) => {
         dispatch(removeFav(id))
      }
   }
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites,
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);