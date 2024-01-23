import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import style from "./seasonThree.module.css"

import { getEpisodes } from "../../../redux/Actions/actions";
import { ConfigProvider, Menu } from 'antd';

import img1 from "../../../assets/img/Cap.22.png";
import img2 from "../../../assets/img/Cap.23.png";
import img3 from "../../../assets/img/Cap.24.png";
import img4 from "../../../assets/img/Cap.25.png";
import img5 from "../../../assets/img/Cap.26.png";
import img6 from "../../../assets/img/Cap.27.png";
import img7 from "../../../assets/img/Cap.28.png";
import img8 from "../../../assets/img/Cap.29.png";
import img9 from "../../../assets/img/Cap.30.png";
import img10 from "../../../assets/img/Cap.31.png";
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

const SeasonThree = () => {
  const allEpisodes = useSelector((state) => state.allEpisodes);
  const [episodes, setEpisodes] = useState([]);
  const dispatch = useDispatch();
  const id = [22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

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
          Season 3
        </span>
      )
    },
    {
      type: 'divider',
    },
    getItem(episodes[0]?.name, 'sub2', <img className={style.img} src={img1} />, [
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
              href='https://play.hbomax.com/page/urn:hbo:page:GXrWioQKSk45awgEAAAQT:type:episode?utm_id=1100l5988&utm_source=gowatchit_gp&utm_medium=affiliate&clickref=1100lybuMAdY'
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
    getItem(episodes[1]?.name, 'sub3', <img className={style.img} src={img2} />, [
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
              href='https://play.hbomax.com/page/urn:hbo:page:GXrWxVQ0mlTmqwwEAAACL:type:episode?utm_id=1100l5988&utm_source=gowatchit_gp&utm_medium=affiliate&clickref=1100lybuMAme'
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
    getItem(episodes[2]?.name, 'sub4', <img className={style.img} src={img3} />, [
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
              href='https://play.hbomax.com/page/urn:hbo:page:GXrWxGQtSvzmqwwEAAABM:type:episode?utm_id=1100l5988&utm_source=gowatchit_gp&utm_medium=affiliate&clickref=1100lybuMAo9'
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
    getItem(episodes[3]?.name, 'sub5', <img className={style.img} src={img4} />, [
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
              href='https://play.hbomax.com/page/urn:hbo:page:GXrWtxg1SSIayhAEAAAZF:type:episode?utm_id=1100l5988&utm_source=gowatchit_gp&utm_medium=affiliate&clickref=1100lybuMAvL'
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
    getItem(episodes[4]?.name, 'sub6', <img className={style.img} src={img5} />, [
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
              href='https://play.hbomax.com/page/urn:hbo:page:GXrWiqwUfhb7DwgEAAARd:type:episode?utm_id=1100l5988&utm_source=gowatchit_gp&utm_medium=affiliate&clickref=1100lybuMAzU'
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
    getItem(episodes[5]?.name, 'sub7', <img className={style.img} src={img6} />, [
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
              href='https://play.hbomax.com/page/urn:hbo:page:GXrWqhwXeIr7DwgEAAAWw:type:episode?utm_id=1100l5988&utm_source=gowatchit_gp&utm_medium=affiliate&clickref=1011lycij5gX'
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
    getItem(episodes[6]?.name, 'sub8', <img className={style.img} src={img7} />, [
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
              href='https://play.hbomax.com/page/urn:hbo:page:GXrWrOwodjY5awgEAAAVL:type:episode?utm_id=1100l5988&utm_source=gowatchit_gp&utm_medium=affiliate&clickref=1101lybVwNK8'
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
    getItem(episodes[7]?.name, 'sub9', <img className={style.img} src={img8} />, [
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
              href='https://play.hbomax.com/page/urn:hbo:page:GXrWozgwUiY5awgEAAAS_:type:episode?utm_id=1100l5988&utm_source=gowatchit_gp&utm_medium=affiliate&clickref=1100lybuMBgE'
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
    getItem(episodes[8]?.name, 'sub10', <img className={style.img} src={img9} />, [
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
              href='https://play.hbomax.com/page/urn:hbo:page:GXrWijQMivL7DwgEAAARX:type:episode?utm_id=1100l5988&utm_source=gowatchit_gp&utm_medium=affiliate&clickref=1100lybuMBmB'
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
    getItem(episodes[9]?.name, 'sub11', <img className={style.img} src={img10} />, [
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
              href='https://play.hbomax.com/page/urn:hbo:page:GXrWqaQVsYoayhAEAAAWW:type:episode?utm_id=1100l5988&utm_source=gowatchit_gp&utm_medium=affiliate&clickref=1011lycij5zo'
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

export default SeasonThree;