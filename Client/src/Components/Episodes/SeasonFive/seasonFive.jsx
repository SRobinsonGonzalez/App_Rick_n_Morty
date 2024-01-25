import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import style from "./seasonFive.module.css"

import { getEpisodes } from "../../../redux/Actions/actions";
import { ConfigProvider, Menu } from 'antd';

import img1 from "../../../assets/img/Cap.42.png";
import img2 from "../../../assets/img/Cap.43.png";
import img3 from "../../../assets/img/Cap.44.png";
import img4 from "../../../assets/img/Cap.45.png";
import img5 from "../../../assets/img/Cap.46.png";
import img6 from "../../../assets/img/Cap.47.png";
import img7 from "../../../assets/img/Cap.48.png";
import img8 from "../../../assets/img/Cap.49.png";
import img9 from "../../../assets/img/Cap.50.png";
import img10 from "../../../assets/img/Cap.51.png";
import imgHBO from "../../../assets/img/HBO.png";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const SeasonFive = () => {
  const allEpisodes = useSelector((state) => state.allEpisodes);
  const [episodes, setEpisodes] = useState([]);
  const dispatch = useDispatch();
  const id = [42, 43, 44, 45, 46, 47, 48, 49, 50, 51];

  useEffect(() => {
    if (episodes.length === 0) {
      dispatch(getEpisodes(id))
        .then(() => {
          setEpisodes(allEpisodes);
        });
    }
  }, [dispatch, episodes, allEpisodes]);

  const onClick = (e) => {
    console.log('click ', e);
  };

  const items = [
    {
      type: 'divider',
    },
    {
      ...getItem(null, 'sub1'),
      style: { height: 40 },
      label: (
        <span style={{ fontSize: 19 }}>
          Season 5
        </span>
      )
    },
    {
      type: 'divider',
    },
    getItem(`${episodes[0]?.id}: ${episodes[0]?.name}`, 'sub2', <img className={style.img} src={img1} />, [
      {
        ...getItem(),
        style: { height: 20 },
        label: (
          <span style={{ display: 'flex' }}>
            Air date: {episodes[0]?.air_date}
          </span>
        ),
      },
      {
        ...getItem(),
        style: { height: 80 },
        label: (
          <div
            style={{
              alignItems: 'center',
              display: 'flex',
            }}
          >
            <img
              alt="HBO Logo"
              src={imgHBO}
              style={{
                width: '50px',
                borderRadius: '10px'
              }}
            />
            <span
              style={{
                marginLeft: 10
              }}
            >
              Stream
            </span>
            <a
              href='https://play.hbomax.com/page/urn:hbo:page:GYNdsAAMIomKSjQEAAAAV:type:episode'
              rel="noopener noreferrer"
              target="_blank"
            />
          </div>
        ),
      },
    ]),
    {
      type: 'divider',
    },
    getItem(`${episodes[1]?.id}: ${episodes[1]?.name}`, 'sub3', <img className={style.img} src={img2} />, [
      {
        ...getItem(),
        style: { height: 20 },
        label: (
          <span style={{ display: 'flex' }}>
            Air date: {episodes[1]?.air_date}
          </span>
        ),
      },
      {
        ...getItem(),
        style: { height: 80 },
        label: (
          <div
            style={{
              alignItems: 'center',
              display: 'flex',
            }}
          >
            <img
              alt="HBO Logo"
              src={imgHBO}
              style={{
                width: '50px',
                borderRadius: '10px'
              }}
            />
            <span
              style={{
                marginLeft: 10
              }}
            >
              Stream
            </span>
            <a
              href='https://play.hbomax.com/page/urn:hbo:page:GYNXYtgWyi1SLqQEAAAAl:type:episode'
              rel="noopener noreferrer"
              target="_blank"
            />
          </div>
        ),
      },
    ]),
    {
      type: 'divider',
    },
    getItem(`${episodes[2]?.id}: ${episodes[2]?.name}`, 'sub4', <img className={style.img} src={img3} />, [
      {
        ...getItem(),
        style: { height: 20 },
        label: (
          <span style={{ display: 'flex' }}>
            Air date: {episodes[2]?.air_date}
          </span>
        ),
      },
      {
        ...getItem(),
        style: { height: 80 },
        label: (
          <div
            style={{
              alignItems: 'center',
              display: 'flex',
            }}
          >
            <img
              alt="HBO Logo"
              src={imgHBO}
              style={{
                width: '50px',
                borderRadius: '10px'
              }}
            />
            <span
              style={{
                marginLeft: 10
              }}
            >
              Stream
            </span>
            <a
              href='https://play.hbomax.com/page/urn:hbo:page:GYdXbzAMorZC2hwEAAAAg:type:episode'
              rel="noopener noreferrer"
              target="_blank"
            />
          </div>
        ),
      },
    ]),
    {
      type: 'divider',
    },
    getItem(`${episodes[3]?.id}: ${episodes[3]?.name}`, 'sub5', <img className={style.img} src={img4} />, [
      {
        ...getItem(),
        style: { height: 20 },
        label: (
          <span style={{ display: 'flex' }}>
            Air date: {episodes[3]?.air_date}
          </span>
        ),
      },
      {
        ...getItem(),
        style: { height: 80 },
        label: (
          <div
            style={{
              alignItems: 'center',
              display: 'flex',
            }}
          >
            <img
              alt="HBO Logo"
              src={imgHBO}
              style={{
                width: '50px',
                borderRadius: '10px'
              }}
            />
            <span
              style={{
                marginLeft: 10
              }}
            >
              Stream
            </span>
            <a
              href='https://play.hbomax.com/page/urn:hbo:page:GYdXbzADV65C2hwEAAAAf:type:episode'
              rel="noopener noreferrer"
              target="_blank"
            />
          </div>
        ),
      },
    ]),
    {
      type: 'divider',
    },
    getItem(`${episodes[4]?.id}: ${episodes[4]?.name}`, 'sub6', <img className={style.img} src={img5} />, [
      {
        ...getItem(),
        style: { height: 20 },
        label: (
          <span style={{ display: 'flex' }}>
            Air date: {episodes[4]?.air_date}
          </span>
        ),
      },
      {
        ...getItem(),
        style: { height: 80 },
        label: (
          <div
            style={{
              alignItems: 'center',
              display: 'flex',
            }}
          >
            <img
              alt="HBO Logo"
              src={imgHBO}
              style={{
                width: '50px',
                borderRadius: '10px'
              }}
            />
            <span
              style={{
                marginLeft: 10
              }}
            >
              Stream
            </span>
            <a
              href='https://play.hbomax.com/page/urn:hbo:page:GYOb3LAT0hsPDwgEAAAVI:type:episode'
              rel="noopener noreferrer"
              target="_blank"
            />
          </div>
        ),
      },
    ]),
    {
      type: 'divider',
    },
    getItem(`${episodes[5]?.id}: ${episodes[5]?.name}`, 'sub7', <img className={style.img} src={img6} />, [
      {
        ...getItem(),
        style: { height: 20 },
        label: (
          <span style={{ display: 'flex' }}>
            Air date: {episodes[5]?.air_date}
          </span>
        ),
      },
      {
        ...getItem(),
        style: { height: 80 },
        label: (
          <div
            style={{
              alignItems: 'center',
              display: 'flex',
            }}
          >
            <img
              alt="HBO Logo"
              src={imgHBO}
              style={{
                width: '50px',
                borderRadius: '10px'
              }}
            />
            <span
              style={{
                marginLeft: 10
              }}
            >
              Stream
            </span>
            <a
              href='https://play.hbomax.com/page/urn:hbo:page:GYOceOQyet4MqsQEAAAUB:type:episode'
              rel="noopener noreferrer"
              target="_blank"
            />
          </div>
        ),
      },
    ]),
    {
      type: 'divider',
    },
    getItem(`${episodes[6]?.id}: ${episodes[6]?.name}`, 'sub8', <img className={style.img} src={img7} />, [
      {
        ...getItem(),
        style: { height: 20 },
        label: (
          <span style={{ display: 'flex' }}>
            Air date: {episodes[6]?.air_date}
          </span>
        ),
      },
      {
        ...getItem(),
        style: { height: 80 },
        label: (
          <div
            style={{
              alignItems: 'center',
              display: 'flex',
            }}
          >
            <img
              alt="HBO Logo"
              src={imgHBO}
              style={{
                width: '50px',
                borderRadius: '10px'
              }}
            />
            <span
              style={{
                marginLeft: 10
              }}
            >
              Stream
            </span>
            <a
              href='https://play.hbomax.com/page/urn:hbo:page:GYPbd8ASzP5eJwgEAAAFQ:type:episode'
              rel="noopener noreferrer"
              target="_blank"
            />
          </div>
        ),
      },
    ]),
    {
      type: 'divider',
    },
    getItem(`${episodes[7]?.id}: ${episodes[7]?.name}`, 'sub9', <img className={style.img} src={img8} />, [
      {
        ...getItem(),
        style: { height: 20 },
        label: (
          <span style={{ display: 'flex' }}>
            Air date: {episodes[7]?.air_date}
          </span>
        ),
      },
      {
        ...getItem(),
        style: { height: 80 },
        label: (
          <div
            style={{
              alignItems: 'center',
              display: 'flex',
            }}
          >
            <img
              alt="HBO Logo"
              src={imgHBO}
              style={{
                width: '50px',
                borderRadius: '10px'
              }}
            />
            <span
              style={{
                marginLeft: 10
              }}
            >
              Stream
            </span>
            <a
              href='https://play.hbomax.com/page/urn:hbo:page:GYPXnTA0ycbPCQAEAAAEG:type:episode'
              rel="noopener noreferrer"
              target="_blank"
            />
          </div>
        ),
      },
    ]),
    {
      type: 'divider',
    },
    getItem(`${episodes[8]?.id}: ${episodes[8]?.name}`, 'sub10', <img className={style.img} src={img9} />, [
      {
        ...getItem(),
        style: { height: 20 },
        label: (
          <span style={{ display: 'flex' }}>
            Air date: {episodes[8]?.air_date}
          </span>
        ),
      },
      {
        ...getItem(),
        style: { height: 80 },
        label: (
          <div
            style={{
              alignItems: 'center',
              display: 'flex',
            }}
          >
            <img
              alt="HBO Logo"
              src={imgHBO}
              style={{
                width: '50px',
                borderRadius: '10px'
              }}
            />
            <span
              style={{
                marginLeft: 10
              }}
            >
              Stream
            </span>
            <a
              href='https://play.hbomax.com/page/urn:hbo:page:GYdXbzARjgJKwoAEAAAAE:type:episode'
              rel="noopener noreferrer"
              target="_blank"
            />
          </div>
        ),
      },
    ]),
    {
      type: 'divider',
    },
    getItem(`${episodes[9]?.id}: ${episodes[9]?.name}`, 'sub11', <img className={style.img} src={img10} />, [
      {
        ...getItem(),
        style: { height: 20 },
        label: (
          <span style={{ display: 'flex' }}>
            Air date: {episodes[9]?.air_date}
          </span>
        ),
      },
      {
        ...getItem(),
        style: { height: 80 },
        label: (
          <div
            style={{
              alignItems: 'center',
              display: 'flex',
            }}
          >
            <img
              alt="HBO Logo"
              src={imgHBO}
              style={{
                width: '50px',
                borderRadius: '10px'
              }}
            />
            <span
              style={{
                marginLeft: 10
              }}
            >
              Stream
            </span>
            <a
              href='https://play.hbomax.com/page/urn:hbo:page:GYP7MfASUUqsVnwEAAAAL:type:episode'
              rel="noopener noreferrer"
              target="_blank"
            />
          </div>
        ),
      },
    ]),
    {
      type: 'divider',
    },
  ];

  return (
    <div className={style.seasonOneBox}>
      <ConfigProvider
        theme={{
          components: {
            Menu: {
              itemHeight: 100
            }
          }
        }}
      >
        <Menu
          defaultSelectedKeys={['sub1']}
          items={items}
          mode="inline"
          onClick={onClick}
          style={{
            width: '100%',
          }}
        // theme="dark"
        />
      </ConfigProvider>
    </div>
  )
};

export default SeasonFive;