import React from "react";
import { Button, Carousel, Col, Row } from "antd";
import style from "./carousel.module.css"

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
  lineHeight: '160px',
  margin: '0',
  textAlign: 'center',
};
const contentStyleTwo = {
  background: `url(${seasonTwoStyle})`,
  backgroundSize: 'cover',
  borderRadius: '6px',
  color: '#fff',
  height: '700px',
  lineHeight: '160px',
  margin: '0',
  textAlign: 'center',
};
const contentStyleThree = {
  background: `url(${seasonThreeStyle})`,
  backgroundSize: 'cover',
  borderRadius: '6px',
  color: '#fff',
  height: '700px',
  lineHeight: '160px',
  margin: '0',
  textAlign: 'center',
};
const contentStyleFour = {
  background: `url(${seasonFourStyle})`,
  backgroundSize: 'cover',
  borderRadius: '6px',
  color: '#fff',
  height: '700px',
  lineHeight: '160px',
  margin: '0',
  textAlign: 'center',
};
const contentStyleFive = {
  background: `url(${seasonFiveStyle})`,
  backgroundSize: 'cover',
  borderRadius: '6px',
  color: '#fff',
  height: '700px',
  lineHeight: '160px',
  margin: '0',
  textAlign: 'center',
};

const SeasonsCarousel = () => {
  return (
    <div className={style.seasonsCarouselBox}>
      <div className={style.seasonsBox}>
        <Row gutter={15}>
          <Col span={12}>
            <Carousel autoplay>
              <div>
                <div style={contentStyleOne}>
                  <Button>Episodes</Button>
                </div>
              </div>
              <div>
                <div style={contentStyleTwo}>
                  <Button>Episodes</Button>
                </div>
              </div>
              <div>
                <div style={contentStyleThree}>
                  <Button>Episodes</Button>
                </div>
              </div>
              <div>
                <div style={contentStyleFour}>
                  <Button>Episodes</Button>
                </div>
              </div>
              <div>
                <div style={contentStyleFive}>
                  <Button>Episodes</Button>
                </div>
              </div>
            </Carousel>
          </Col>
          <Col span={12}>
            <SeasonFive />
          </Col>
        </Row>
      </div>
    </div >
  )
};

export default SeasonsCarousel;