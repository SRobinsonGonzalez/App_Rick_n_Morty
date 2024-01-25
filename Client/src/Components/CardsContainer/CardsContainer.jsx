import { getAllCharacters } from '../../redux/Actions/actions';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import style from './CardsContainer.module.css'
import Card from '../Card/Card';
import { Pagination } from 'antd';

function CardsContainer({ toggleDetail }) {
  const allCharacters = useSelector((state) => state.allCharacters);
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const randomPage = Math.round(Math.random() * (56 - 1 + 1)) + 1;
    setCurrentPage(randomPage);
    if (characters.length === 0) {
      dispatch(getAllCharacters());
    }
  }, [dispatch, characters]);

  useEffect(() => {
    setCharacters(allCharacters);
  }, [allCharacters]);

  // Manejo del cambio de página
  const onChangePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const charactersPerPage = 15;
  const indexOfLastItem = currentPage * charactersPerPage;
  const indexOfFirstItem = indexOfLastItem - charactersPerPage;
  const currentCharacters = characters.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className={style.cardsBox}>
      <div className={style.cards}>
        {currentCharacters.map(({ id, name, status, species, gender, image, origin }) => (
          <Card
            key={id}
            id={id}
            name={name}
            status={status}
            species={species}
            gender={gender}
            origin={origin.name}
            image={image}
            toggleDetail={() => toggleDetail(id)}
          />
        ))}
      </div>
      <Pagination
        current={currentPage}
        onChange={onChangePage}
        pageSize={charactersPerPage}
        showQuickJumper
        showSizeChanger={false}
        style={{
          padding: '50px 0 30px',
          width: '100%'
        }}
        total={characters.length}
      />
      <img className={style.sticker} src="./src/assets/img/01.png" alt="Sticker" />
      <img className={style.bubble} src="./src/assets/img/18.png" alt="Bubble" />
      <div className={style.bubbleText}>
        <h2 className={style.typeWriter}>Welcome Home Coleguilla!</h2>
      </div>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
      </style>
    </div>
  )
}

export default CardsContainer;