import { useSelector } from "react-redux";
// import { filterCards, orderCards } from "../../redux/Actions/actions";
// import { FaArrowDownShortWide, FaArrowDownWideShort } from 'react-icons/fa6'
import Card from "../Card/Card";
import style from './Favorites.module.css'

const Favorites = ({ toggleDetail }) => {
  const favorites = useSelector((state) => state.myFavorites);

  return (
    <div className={style.boxes}>
      <div className={style.cards}>
        <div className={style.selects}>
          <select className={style.order} name="select" placeholder="Order" /*onChange={handleOrder}*/>
            <option value=''>Sort by id</option>
            <option value='A'> Upward</option>
            <option value='D'> Falling</option>
          </select>
          <select className={style.order} name="select2" placeholder="Gender" /*onChange={handleFilter}*/>
            {['Sort by gender', 'Male', 'Female', 'Genderless', 'unknown', 'AllGenders'].map((gender) => (
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
            toggleDetail={() => toggleDetail(id)}
          />
        ))}
      </div>
      <img className={style.sticker} src="./src/assets/img/01.png" />
      <img className={style.bubble} src="./src/assets/img/18.png" />
      <div className={style.bubbleText}>
        <h2 className={style.typeWriter}>Are those your favorites?</h2>
      </div>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Blinker:wght@100&display=swap');
      </style>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
      </style>
    </div>
  );
};

export default Favorites;