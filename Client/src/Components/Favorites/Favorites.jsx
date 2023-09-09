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
            <div>
                <select placeholder="Order" onChange={handleOrder}>
                    <option value='A'>Upward</option>
                    <option value='D'>Falling</option>
                </select>
                <select placeholder="Gender" onChange={handleFilter}>
                    {['', 'Male', 'Female', 'Genderless', 'unknown', 'AllGenders'].map((gender) => (
                        <option key={gender} value={gender}>{gender}</option>
                    ))}
                </select>
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
            <img className={style.imgCards} src="./src/assets/img/01.png" />
        </div>
    );
};

export default Favorites;