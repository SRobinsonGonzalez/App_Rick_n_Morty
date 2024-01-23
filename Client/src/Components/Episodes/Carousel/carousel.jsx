import React, { useEffect, useState } from "react";
import { Button, Carousel, Col, Row } from "antd";
import style from "./carousel.module.css";

import seasonOneStyle from "../../../assets/img/19.png";
import seasonTwoStyle from "../../../assets/img/20.png";
import seasonThreeStyle from "../../../assets/img/21.png";
import seasonFourStyle from "../../../assets/img/22.png";
import seasonFiveStyle from "../../../assets/img/23.png";
import SeasonOne from "../SeasonOne/seasonOne";
import SeasonTwo from "../SeasonTwo/seasonTwo";
import SeasonThree from "../SeasonThree/seasonThree";
import SeasonFour from "../SeasonFour/seasonFour";
import SeasonFive from "../SeasonFive/seasonFive";

const contentStyleOne = {
  background: `url(${seasonOneStyle})`,
  backgroundSize: 'cover',
  borderRadius: '6px',
  color: '#fff',
  height: '700px',
  lineHeight: '450px',
  margin: '0',
  textAlign: 'center',
};
const contentStyleTwo = {
  background: `url(${seasonTwoStyle})`,
  backgroundSize: 'cover',
  borderRadius: '6px',
  color: '#fff',
  height: '700px',
  lineHeight: '450px',
  margin: '0',
  textAlign: 'center',
};
const contentStyleThree = {
  background: `url(${seasonThreeStyle})`,
  backgroundSize: 'cover',
  borderRadius: '6px',
  color: '#fff',
  height: '700px',
  lineHeight: '450px',
  margin: '0',
  textAlign: 'center',
};
const contentStyleFour = {
  background: `url(${seasonFourStyle})`,
  backgroundSize: 'cover',
  borderRadius: '6px',
  color: '#fff',
  height: '700px',
  lineHeight: '450px',
  margin: '0',
  textAlign: 'center',
};
const contentStyleFive = {
  background: `url(${seasonFiveStyle})`,
  backgroundSize: 'cover',
  borderRadius: '6px',
  color: '#fff',
  height: '700px',
  lineHeight: '450px',
  margin: '0',
  textAlign: 'center',
};

const SeasonsCarousel = () => {
  const [currentSeason, setCurrentSeason] = useState(1);
  const [isEntering, setIsEntering] = useState(true);

  const handleButtonClick = (seasonNumber) => {
    setIsEntering(true);
    setTimeout(() => {
      setCurrentSeason(seasonNumber);
      setIsEntering(false);
    }, 1000);
  };

  const getSeasonComponent = () => {
    switch (currentSeason) {
      case 1:
        return <SeasonOne />;
      case 2:
        return <SeasonTwo />;
      case 3:
        return <SeasonThree />;
      case 4:
        return <SeasonFour />;
      case 5:
        return <SeasonFive />;
      default:
        return null;
    }
  };

  return (
    <div className={style.seasonsCarouselBox}>
      <div className={style.seasonsBox}>
        <Row gutter={15}>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Carousel autoplay>
              <div>
                <div style={contentStyleOne}>
                  <Button onClick={() => handleButtonClick(1)} style={{ marginLeft: '5%' }}>Episodes</Button>
                </div>
              </div>
              <div>
                <div style={contentStyleTwo}>
                  <Button onClick={() => handleButtonClick(2)} style={{ marginLeft: '5%' }}>Episodes</Button>
                </div>
              </div>
              <div>
                <div style={contentStyleThree}>
                  <Button onClick={() => handleButtonClick(3)} style={{ marginLeft: '5%' }}>Episodes</Button>
                </div>
              </div>
              <div>
                <div style={contentStyleFour}>
                  <Button onClick={() => handleButtonClick(4)} style={{ marginLeft: '5%' }}>Episodes</Button>
                </div>
              </div>
              <div>
                <div style={contentStyleFive}>
                  <Button onClick={() => handleButtonClick(5)} style={{ marginLeft: '5%' }}>Episodes</Button>
                </div>
              </div>
            </Carousel>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <div className={style.container}>
              <div className={`${style.content} ${isEntering ? "" : style.enter} ${style.opacityTransition}`}>
                {getSeasonComponent()}
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default SeasonsCarousel;