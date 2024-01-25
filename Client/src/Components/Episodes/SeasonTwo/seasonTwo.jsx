import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import style from "./seasonTwo.module.css"

import { getEpisodes } from "../../../redux/Actions/actions";
import { ConfigProvider, Menu } from 'antd';

import img1 from "../../../assets/img/Cap.12.png";
import img2 from "../../../assets/img/Cap.13.png";
import img3 from "../../../assets/img/Cap.14.png";
import img4 from "../../../assets/img/Cap.15.png";
import img5 from "../../../assets/img/Cap.16.png";
import img6 from "../../../assets/img/Cap.17.png";
import img7 from "../../../assets/img/Cap.18.png";
import img8 from "../../../assets/img/Cap.19.png";
import img9 from "../../../assets/img/Cap.20.png";
import img10 from "../../../assets/img/Cap.21.png";
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

const SeasonTwo = () => {
  const allEpisodes = useSelector((state) => state.allEpisodes);
  const [episodes, setEpisodes] = useState([]);
  const dispatch = useDispatch();
  const id = [12, 13, 14, 15, 16, 17, 18, 19, 20, 21];

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
          Season 2
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
              href='https://play.hbomax.com/page/urn:hbo:page:GXrWoBgt9V77DwgEAAAUZ:type:episode?utm_id=1100l5988&utm_source=gowatchit_gp&utm_medium=affiliate&clickref=1100lybuLVUD'
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
              href='https://play.hbomax.com/page/urn:hbo:page:GXrWmJgIAjo5awgEAAARf:type:episode?utm_id=1100l5988&utm_source=gowatchit_gp&utm_medium=affiliate&clickref=1101lybVwhUw'
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
              href='https://play.hbomax.com/page/urn:hbo:page:GXrWodQB1o77DwgEAAAUi:type:episode?utm_id=1100l5988&utm_source=gowatchit_gp&utm_medium=affiliate&clickref=1100lybuMdIK'
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
              href='https://play.hbomax.com/page/urn:hbo:page:GXrWpbwBZUI5awgEAAATM:type:episode?utm_id=1100l5988&utm_source=gowatchit_gp&utm_medium=affiliate&clickref=1011lyciiJ2i'
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
              href='https://play.hbomax.com/page/urn:hbo:page:GXrWxLQq1bDmqwwEAAABk:type:episode?utm_id=1100l5988&utm_source=gowatchit_gp&utm_medium=affiliate&clickref=1011lyciiJ9F'
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
              href='https://play.hbomax.com/page/urn:hbo:page:GXrWn6AqvyIayhAEAAAT-:type:episode?utm_id=1100l5988&utm_source=gowatchit_gp&utm_medium=affiliate&clickref=1100lybuMes9'
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
              href='https://play.hbomax.com/page/urn:hbo:page:GXrWq4Qjk6L7DwgEAAAXD:type:episode?utm_id=1100l5988&utm_source=gowatchit_gp&utm_medium=affiliate&clickref=1011lyciiJiN'
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
              href='https://play.hbomax.com/page/urn:hbo:page:GXrWlaAMFsL7DwgEAAASM:type:episode?utm_id=1100l5988&utm_source=gowatchit_gp&utm_medium=affiliate&clickref=1101lybVwvGo'
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
              href='https://play.hbomax.com/page/urn:hbo:page:GXrWqcwWqeL7DwgEAAAWm:type:episode?utm_id=1100l5988&utm_source=gowatchit_gp&utm_medium=affiliate&clickref=1011lyciiJY3'
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
              href='https://play.hbomax.com/page/urn:hbo:page:GXrWqNwXyJIayhAEAAAWH:type:episode?utm_id=1100l5988&utm_source=gowatchit_gp&utm_medium=affiliate&clickref=1101lybVwvMx'
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

export default SeasonTwo;