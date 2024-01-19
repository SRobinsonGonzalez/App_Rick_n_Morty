import CardsContainer from "../../Components/CardsContainer/CardsContainer";
import style from "./home.module.css";
import React from "react";

const Home = () => {
  return (
    <div className={style.CardsContainer}>
      <CardsContainer />
    </div>
  )
};

export default Home;