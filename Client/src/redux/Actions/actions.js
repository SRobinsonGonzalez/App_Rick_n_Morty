import axios from 'axios';
import { ADD_FAVORITE, CLEAN_DETAIL, DELETE_FAVORITE, GET_ALL_CHARACTERS, GET_ALL_FAVORITES, GET_CHARACTER_BY_ID, GET_EPISODES, GET_USER_DATA, LOGIN, LOGOUT } from './action-types';

const getChacarterById = (id) => {
  const endpoint = `/character/${id}`;
  return async (dispatch) => {
    try {
      const response = await axios.get(endpoint);
      dispatch({
        type: GET_CHARACTER_BY_ID,
        payload: response.data
      });
    } catch (error) {
      console.error(error);
      throw Error(error.response.data.error);
    };
  };
};

const cleanDetail = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: CLEAN_DETAIL,
      });
    } catch (error) {
      console.error(error);
    };
  };
};

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

const addFavorite = (favorite, id) => {
  const endpoint = `/favorites/add/${id}`
  return async (dispatch) => {
    try {
      const response = await axios.post(endpoint, favorite);
      dispatch({
        type: ADD_FAVORITE,
        payload: response.data
      });
      dispatch(getAllFavorites(id));
    } catch (error) {
      console.error(error);
      throw Error(error.response.data.error);
    };
  };
};

const deleteFavorite = (favorite, id) => {
  const endpoint = `/favorites/delete/${id}?id=${favorite.id}`
  return async (dispatch) => {
    try {
      const response = await axios.delete(endpoint);
      dispatch({
        type: DELETE_FAVORITE,
        payload: response.data
      });
      dispatch(getAllFavorites(id));
    } catch (error) {
      console.error(error.message);
      throw Error(error.response.data.error);
    };
  };
};

const getAllFavorites = (id) => {
  const endpoint = `/favorites/${id}`;
  return async (dispatch) => {
    try {
      const response = await axios.get(endpoint);
      return dispatch({
        type: GET_ALL_FAVORITES,
        payload: response.data
      });
    } catch (error) {
      console.error(error);
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
  getChacarterById,
  getAllCharacters,
  cleanDetail,
  addFavorite,
  deleteFavorite,
  getAllFavorites,
  loginUser,
  logoutUser,
  getUserData,
  getEpisodes
};