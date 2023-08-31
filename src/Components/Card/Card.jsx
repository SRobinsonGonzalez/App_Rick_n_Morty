import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/Actions/actions";
import { useEffect, useState } from "react";

function Card({ id, name, species, gender, status, origin, image, onClose, addFav, removeFav, myFavorites }) {

   const [isFav, setIsFav] = useState(false);
   
   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false),
            removeFav(id);
      } else {
         setIsFav(true),
            addFav({ id, name, species, gender, status, origin, image, onClose, addFav, removeFav })
      }
   }

   useEffect(() => {
      myFavorites.forEach((favorite) => {
         if (favorite.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites])

   return (
      <div>
         {isFav ? (
            <button onClick={handleFavorite}>❤️</button>
         ) : (
            <button onClick={handleFavorite}>🤍</button>
         )}
         <button onClick={() => onClose(id)}>X</button>
         <Link to={`/detail/${id}`}>
            <h2>{name}</h2>
         </Link>
         <img src={image} alt={name} />
         <h2>{species}</h2>
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