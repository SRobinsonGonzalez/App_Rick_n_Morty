import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import style from "./seasonOne.module.css"

import { getEpisodes } from "../../../redux/Actions/actions";
import { ConfigProvider, Menu } from 'antd';

import img1 from "../../../assets/img/Cap.1.png";
import img2 from "../../../assets/img/Cap.2.png";
import img3 from "../../../assets/img/Cap.3.png";
import img4 from "../../../assets/img/Cap.4.png";
import img5 from "../../../assets/img/Cap.5.png";
import img6 from "../../../assets/img/Cap.6.png";
import img7 from "../../../assets/img/Cap.7.png";
import img8 from "../../../assets/img/Cap.8.png";
import img9 from "../../../assets/img/Cap.9.png";
import img10 from "../../../assets/img/Cap.10.png";
import img11 from "../../../assets/img/Cap.11.png";
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

const SeasonOne = () => {
  const allEpisodes = useSelector((state) => state.allEpisodes);
  const [episodes, setEpisodes] = useState([]);
  console.log(episodes);
  const dispatch = useDispatch();
  const id = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

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
          Season 1
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
              href='https://play.hbomax.com/page/urn:hbo:page:GXkRkPgoDro7CZgEAABqh:type:episode?utm_id=1100l5988&utm_source=gowatchit_gp&utm_medium=affiliate&clickref=1101lybx5eZD'
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
              href='https://play.hbomax.com/page/urn:hbo:page:GXl2aAgboTSLCHAEAAAm7:type:episode?utm_id=1100l5988&utm_source=gowatchit_gp&utm_medium=affiliate&clickref=1100lyb5jXA5'
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
              href='https://play.hbomax.com/page/urn:hbo:page:GXrWp8QRaGr7DwgEAAAWC:type:episode?utm_id=1100l5988&utm_source=gowatchit_gp&utm_medium=affiliate&clickref=1100lyb6iRHk'
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
              href='https://play.hbomax.com/page/urn:hbo:page:GXrWp5wLB6I5awgEAAATx:type:episode?utm_id=1100l5988&utm_source=gowatchit_gp&utm_medium=affiliate&clickref=1100lyb6iUaE'
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
              href='https://play.hbomax.com/page/urn:hbo:page:GXrWrJwmCoI5awgEAAAU-:type:episode?utm_id=1100l5988&utm_source=gowatchit_gp&utm_medium=affiliate&clickref=1100lyb6iULc  '
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
              href='https://play.hbomax.com/page/urn:hbo:page:GXl2aIAEq2yLCHAEAAAoZ:type:episode?utm_id=1100l5988&utm_source=gowatchit_gp&utm_medium=affiliate&clickref=1011lybTuUKS'
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
              href='https://play.hbomax.com/page/urn:hbo:page:GXrWvxQdjeTmqwwEAAAAJ:type:episode?utm_id=1100l5988&utm_source=gowatchit_gp&utm_medium=affiliate&clickref=1011lybTuUQf'
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
              href='https://play.hbomax.com/page/urn:hbo:page:GXrWrMQijDoayhAEAAAXj:type:episode?utm_id=1100l5988&utm_source=gowatchit_gp&utm_medium=affiliate&clickref=1101lybx6Ppz'
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
              href='https://play.hbomax.com/page/urn:hbo:page:GXrWmEgLPmL7DwgEAAASv:type:episode?utm_id=1100l5988&utm_source=gowatchit_gp&utm_medium=affiliate&clickref=1011lybTuVxu'
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
              href='https://play.hbomax.com/page/urn:hbo:page:GXrWmHAGNJ77DwgEAAAS3:type:episode?utm_id=1100l5988&utm_source=gowatchit_gp&utm_medium=affiliate&clickref=1100lyb6iVri'
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
    getItem(`${episodes[10]?.id}: ${episodes[10]?.name}`, 'sub12', <img className={style.img} src={img11} />, [
      {
        ...getItem(),
        style: { height: 20 },
        label: (
          <span style={{ display: 'flex' }}>
            Air date: {episodes[10]?.air_date}
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
              href='https://play.hbomax.com/page/urn:hbo:page:GXrWrHQlOVYayhAEAAAXQ:type:episode?utm_id=1100l5988&utm_source=gowatchit_gp&utm_medium=affiliate&clickref=1011lybTuVKI'
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

export default SeasonOne;