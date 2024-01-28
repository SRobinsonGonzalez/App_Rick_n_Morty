import CardsSearchContainer from "../CardsSearchContainer/cardsSearchContainer";
import Favorites from "../Favorites/Favorites";
import SearchBar from "../SearchBar/SearchBar";
import About from "../../views/About/about";
import Episodes from "../Episodes/episodes";
import Home from "../../views/Home/home";
import Profile from "../Profile/profile";
import React, { useEffect, useState } from "react";
import style from './Nav.module.css'
import {
  HeartOutlined,
  HomeOutlined,
  LogoutOutlined,
  MehOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  VideoCameraOutlined
} from '@ant-design/icons';
import { Avatar, Layout, Menu, Button, theme } from 'antd';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserData, logoutUser } from "../../redux/Actions/actions";
import Detail from "../../views/Detail/Detail";

const { Content, Header, Footer, Sider } = Layout;

const defaultProps = [
  {
    key: '1',
    icon: <HomeOutlined />,
    label: 'Home',
    path: '/home',
  },
  {
    key: '2',
    icon: <UserOutlined />,
    label: 'Profile',
    path: '/profile',
  },
  {
    key: '3',
    icon: <VideoCameraOutlined />,
    label: 'Episodes',
    path: '/episodes',
  },
  {
    key: '4',
    icon: <HeartOutlined />,
    label: 'Favorites',
    path: '/favorites',
  },
  {
    key: '5',
    icon: <MehOutlined />,
    label: 'About',
    path: '/about',
  },
  {
    key: '6',
    icon: <LogoutOutlined />,
    label: 'Logout',
  },
];


function Nav({ characters, onClose, onSearch, onSearchName, randomHandler }) {
  const [selectedCharacterId, setSelectedCharacterId] = useState(null);
  const [showDetail, setShowDetail] = useState(false);
  const [pathname, setPathname] = useState('/home');
  const userId = localStorage.getItem('userId');
  const userData = useSelector((state) => state.userData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleDetail = (characterId) => {
    if (selectedCharacterId !== characterId) {
      setShowDetail(true);
      setSelectedCharacterId(characterId);
    } else {
      setShowDetail(!showDetail);
    };
  };

  const handleDetailClose = () => {
    setShowDetail(false);
  };

  useEffect(() => {
    dispatch(getUserData(userId));
  }, [])

  // Ant Designe

  const [collapsed, setCollapsed] = useState(true);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const handleMenuClick = ({ key }) => {
    const selectedItem = defaultProps.find((item) => item.key === key);
    if (selectedItem.label === 'Logout') {
      dispatch(logoutUser())
        .then(() => {
          const accessToken = localStorage.getItem('accessToken');
          if (!accessToken) {
            navigate('/');
          }
        })
    } else {
      setPathname(selectedItem.path);
    };
  };

  const nickname = userData.nickname;
  const profileImage = userData.profileImage;

  return (
    <div className={style.navBar}>
      <Layout>
        <Sider
          collapsible
          collapsed={collapsed}
          trigger={null}
          width={'15%'}
          theme="dark"
        >
          <div className="demo-logo-vertical" />
          <div style={{
            alignItems: 'center',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}>
            <Avatar src={profileImage ? profileImage : <UserOutlined />} size={54} style={{ margin: '5px' }} />
            {!collapsed ? <p>Welcome {nickname}</p> : null}
          </div>
          <Menu
            theme="dark"
            mode="inline"
            items={defaultProps}
            onClick={handleMenuClick}
          />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 2,
              background: colorBgContainer,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                width: 64,
                height: 64,
              }}
            />
            <SearchBar onSearch={onSearch} onSearchName={onSearchName} randomHandler={randomHandler} />
          </Header>
          <Content
            style={{
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
              height: '83vh',
              margin: '25px 16px 0',
              overflow: 'auto',
            }}
          >
            {showDetail ? (
              <Detail characterId={selectedCharacterId} handleDetailClose={handleDetailClose} />
            ) : (
              <>
                {characters.length === 0 && pathname === "/home"
                  ? <div className={style.videoBox}>
                    <video
                      autoPlay
                      className={style.video}
                      loop
                      muted
                      src='../../src/assets/clips/01.mp4'
                    />
                  </div>
                  : <div className={`${style.cardsBox} ${characters.length > 0 ? style.show : ""}`}>
                    <CardsSearchContainer characters={characters} onClose={onClose} toggleDetail={toggleDetail} />
                  </div>
                }
                {pathname === "/home" && <Home toggleDetail={toggleDetail} />}
              </>
            )}
            <div>
              {pathname === "/favorites" && <Favorites toggleDetail={toggleDetail} />}
              {pathname === "/profile" && <Profile />}
              {pathname === "/episodes" && <Episodes />}
              {pathname === "/about" && <About />}
            </div>
          </Content>
          <Footer
            style={{
              textAlign: 'center',
            }}
          >
            Ant Design ©2023 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default Nav;