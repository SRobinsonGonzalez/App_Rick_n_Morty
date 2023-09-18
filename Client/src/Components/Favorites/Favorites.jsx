import { useDispatch, useSelector } from "react-redux";
import { filterCards, orderCards } from "../../redux/Actions/actions";
import Card from "../Card/Card";
import { useState } from "react";
import style from './Favorites.module.css'

const Favorites = () => {
    const favorites = useSelector((state) => state.myFavorites);
    const dispatch = useDispatch();
    const [aux, setAux] = useState(false);

    function handleOrder(event) {
        dispatch(orderCards(event.target.value));
        setAux(true);
    }

    function handleFilter(event) {
        dispatch(filterCards(event.target.value));
    }

    return (
        <div>
            <div className={style.cards}>
                <div className={style.selects}>
                    <select className={style.order} placeholder="Order" onChange={handleOrder}>
                        <option value='A'>Upward</option>
                        <option value='D'>Falling</option>
                    </select>
                    <select className={style.gender} placeholder="Gender" onChange={handleFilter}>
                        {['', 'Male', 'Female', 'Genderless', 'unknown', 'AllGenders'].map((gender) => (
                            <option key={gender} value={gender}>{gender}</option>
                        ))}
                    </select>
                </div>
                {favorites.map(({ id, name, status, species, gender, image, origin }) => (
                    <Card
                        key={id}
                        id={id}
                        name={name}
                        status={status}
                        species={species}
                        gender={gender}
                        image={image}
                        origin={origin}
                    />
                ))}
            </div>
            <img className={style.sticker} src="./src/assets/img/01.png" />
            <img className={style.bubble} src="./src/assets/img/18.png" />
            <div className={style.bubbleText}>
                <h2 className={style.typeWriter}>My favorites, not yours!</h2>
            </div>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
            </style>
        </div>
    );
};

export default Favorites;