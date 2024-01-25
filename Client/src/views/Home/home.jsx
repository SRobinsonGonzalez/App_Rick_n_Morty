import CardsContainer from "../../Components/CardsContainer/CardsContainer";
import style from "./home.module.css";
import React from "react";

const Home = ({ toggleDetail }) => {
  return (
    <div className={style.CardsContainer}>
      <CardsContainer toggleDetail={toggleDetail} />
    </div>
  )
};

export default Home;