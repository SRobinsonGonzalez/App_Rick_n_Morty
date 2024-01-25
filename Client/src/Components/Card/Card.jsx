import { addFavorite, deleteFavorite } from "../../redux/Actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "./Card.module.css";

function Card({ id, name, species, gender, status, origin, image, onClose, toggleDetail }) {
  const myFavorites = useSelector((state) => state.myFavorites);
  const [randomColorStyle, setRandomColorStyle] = useState({ backgroundColor: '' })
  const [closeButton, setCloseButton] = useState(true);
  const [isFav, setIsFav] = useState(false);
  const dispatch = useDispatch()

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false),
        dispatch(deleteFavorite(id));
    } else {
      setIsFav(true),
        dispatch(addFavorite({ id, name, species, gender, status, origin, image, onClose }));
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
      <div className={style.nameOut}>
        <h1 className={style.name}>{name}</h1>
        {/* <img src='' alt={`Imagen no encontrada de ${props.name}`} /> */}
      </div>
      <div className={style.detail}>
        <h1>Id: {id}</h1>
        <p>Species: {species}</p>
        <p className={style.nameIn}>{name}</p>
        <Link onClick={() => toggleDetail(id)}>See more...</Link>
        <br />
        {isFav ? (
          <button className={style.favorites} onClick={handleFavorite}>❤️</button>
        ) : (
          <button className={style.favorites} onClick={handleFavorite}>🤍</button>
        )}
      </div>
      <img className={style.imgCard} src={image} alt={name} />
      {closeButton && <button className={style.closeButton} onClick={() => onClose(id)}>✖</button>}
    </div>
  );
}

export default Card;