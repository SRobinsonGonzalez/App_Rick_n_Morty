import axios from 'axios';
export const ADD_FAV = 'ADD_FAV';
export const REMOVE_FAV = 'REMOVE_FAV';
export const FILTER = 'FILTER';
export const ORDER = 'ORDER';


export const addFav = (favorite) => {
    return (dispatch) => {
        axios.post('http://localhost:3001/rickandmorty/fav', favorite)
            .then(({ data }) => {
                return dispatch({
                    type: ADD_FAV,
                    payload: data
                });
            });
    };
};

export const removeFav = (id) => {
    return (dispatch) => {
        axios.delete('http://localhost:3001/rickandmorty/fav/' + id)
            .then(({ data }) => {
                return dispatch({
                    type: REMOVE_FAV,
                    payload: data
                });
            });
    };
};

export const filterCards = (gender) => {
    return {
        type: 'FILTER',
        payload: gender
    };
};

export const orderCards = (order) => {
    return {
        type: 'ORDER',
        payload: order
    };
};