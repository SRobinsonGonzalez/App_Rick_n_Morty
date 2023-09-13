import axios from 'axios';
export const ADD_FAV = 'ADD_FAV';
export const REMOVE_FAV = 'REMOVE_FAV';
export const FILTER = 'FILTER';
export const ORDER = 'ORDER';


export const addFav = (favorite) => {
    try {
        return async (dispatch) => {
            const { data } = await axios.post('http://localhost:3001/rickandmorty/fav', favorite);
            return dispatch({
                type: ADD_FAV,
                payload: data
            });
        };
    } catch (error) {
        console.log(error.message);
    };
};
export const removeFav = (id) => {
    try {
        return async (dispatch) => {
            const { data } = await axios.delete('http://localhost:3001/rickandmorty/fav/' + id)
            return dispatch({
                type: REMOVE_FAV,
                payload: data
            });
        };
    } catch (error) {
        console.log(error.message);
    }
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