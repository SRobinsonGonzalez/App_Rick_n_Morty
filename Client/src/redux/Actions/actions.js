import axios from 'axios';
import { ADD_FAVORITE, DELETE_FAVORITE, GET_ALL_CHARACTERS, GET_EPISODES, GET_USER_DATA, LOGIN, LOGOUT } from './action-types';

const getAllCharacters = () => {
  const endpoint = "/character"
  return async (dispatch) => {
    try {
      const response = await axios.get(endpoint);
      dispatch({
        type: GET_ALL_CHARACTERS,
        payload: response.data
      });
    } catch (error) {
      console.error(error);
      throw Error(error.response.data.error);
    };
  };
};

const addFavorite = (favorite) => {
  const endpoint = "/favorites/"
  return async (dispatch) => {
    try {
      const response = await axios.post(endpoint, favorite);
      dispatch({
        type: ADD_FAVORITE,
        payload: response.data
      });
    } catch (error) {
      console.error(error);
      throw Error(error.response.data.error);
    };
  };
};

const deleteFavorite = (id) => {
  const endpoint = `/favorites/delete/${id}`
  return async (dispatch) => {
    try {
      const response = await axios.delete(endpoint);
      return dispatch({
        type: DELETE_FAVORITE,
        payload: response.data
      });
    } catch (error) {
      console.error(error.message);
      throw Error(error.response.data.error);
    };
  };
};

const loginUser = (userData) => {
  const endpoint = '/user/login'
  return async (dispatch) => {
    try {
      const response = await axios.post(endpoint, userData);
      return dispatch({
        type: LOGIN,
        payload: response.data
      });
    } catch (error) {
      console.error(error.message);
      throw Error(error.response.data.error);
    };
  };
};

const logoutUser = () => {
  return async (dispatch) => {
    dispatch({
      type: LOGOUT
    });
  };
};

const getUserData = (id) => {
  const endpoint = `/user/${id}`
  return async (dispatch) => {
    try {
      const response = await axios.get(endpoint);
      return dispatch({
        type: GET_USER_DATA,
        payload: response.data
      });
    } catch (error) {
      console.error(error);
      throw Error(error.response.data.error);
    };
  };
};

const getEpisodes = (id) => {
  const endpoint = `/episodes/${id}`;
  return async (dispatch) => {
    try {
      const response = await axios.get(endpoint);
      return dispatch({
        type: GET_EPISODES,
        payload: response.data
      });
    } catch (error) {
      console.error(error);
      throw Error(error.response.data.error);
    }
  };
};

export {
  getAllCharacters,
  addFavorite,
  deleteFavorite,
  loginUser,
  logoutUser,
  getUserData,
  getEpisodes
};