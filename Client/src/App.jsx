import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { notification } from 'antd';
import axios from 'axios';
import './App.css';

import { loginUser } from './redux/Actions/actions.js';
import Detail from './views/Detail/Detail.jsx';
import Error from './Components/Error/Error';
import Nav from './Components/Nav/Nav.jsx';
import LoginForm from './views/Form/Form';

function App() {
  const userAccessToken = localStorage.getItem('accessToken');
  const [characters, setCharacters] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = (userData) => {
    dispatch(loginUser(userData))
      .then(() => {
        const newAccessToken = localStorage.getItem('accessToken');
        if (newAccessToken) {
          navigate('/home');
        }
      })
      .catch((error) => {
        notification.error({
          message: 'Error',
          description: error.message,
          placement: 'bottomLeft'
        });
      });
  };

  useEffect(() => {
    userAccessToken && navigate('/home');
    !userAccessToken && navigate('/');
  }, [userAccessToken]);

  const onSearch = async (id) => {
    try {
      if (!characters.find(character => character.id === Number(id))) {
        const { data } = await axios.get(`/character/${id}`);
        if (data.id) {
          setCharacters((oldCharacters) => [...oldCharacters, data]);
        } else {
          notification.error({
            message: 'Error',
            description: `¡There are no characters with this ID ${id}!`,
            placement: 'bottomLeft'
          });
        };
      } else {
        notification.info({
          message: 'Sorry',
          description: 'This character has already been added',
          placement: 'bottomLeft'
        });
      };
    } catch (error) {
      console.error(error.message);
    };
  };

  const onSearchName = async (name) => {
    try {
      const { data } = await axios.get(`/character/search?name=${name}`);
      if (Array.isArray(data) && data.length > 0) {
        const existingNames = characters.map((character) => character.name.toLowerCase());
        const duplicateNames = [];
        const newCharacters = data.filter((character) => {
          const lowercaseName = character.name.toLowerCase();
          if (!existingNames.includes(lowercaseName)) {
            existingNames.push(lowercaseName);
            return true;
          } else {
            duplicateNames.push(character.name);
            return false;
          }
        });
        if (duplicateNames.length > 0) {
          notification.info({
            message: 'Sorry',
            description: `Characters ${duplicateNames.join(', ')} are already added`,
            placement: 'bottomLeft'
          });
        }
        if (newCharacters.length > 0) {
          setCharacters((oldCharacters) => [...oldCharacters, ...newCharacters]);
        }
      } else {
        notification.info({
          message: 'Sorry',
          description: 'No characters found with that name',
          placement: 'bottomLeft'
        });
      }
    } catch (error) {
      console.error(error.message);
      notification.info({
        message: 'Sorry',
        description: 'No characters found with that name',
        placement: 'bottomLeft'
      });
    }
  };

  const randomHandler = () => {
    let randomId = (Math.random() * 826).toFixed();
    console.log(randomId);
    randomId = parseInt(randomId);
    if (!characters.includes(randomId)) {
      onSearch(randomId);
    } else {
      return notification.info({
        message: 'Sorry',
        description: 'This character has already been added',
        placement: 'bottomRight'
      });
    };
  };

  const onClose = (id) => {
    setCharacters(characters.filter((character) => character.id !== parseInt(id)));
  };

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<LoginForm login={login} />} />
        {userAccessToken && <Route path='/home' element={<Nav characters={characters} onClose={onClose} onSearch={onSearch} onSearchName={onSearchName} randomHandler={randomHandler} />} />}
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;