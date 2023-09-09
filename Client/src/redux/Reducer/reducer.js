import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "../Actions/actions";

const initialState = {
    myFavorites: [],
    allCharacters: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: action.payload,
                allCharacters: action.payload
            }
        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: action.payload,
                allCharacters: action.payload
            }
        case FILTER:
            if (action.payload === 'AllGenders') {
                return {
                    ...state,
                    myFavorites: state.allCharacters
                }
            } else {
                return {
                    ...state,
                    myFavorites: state.allCharacters.filter(character => character.gender === action.payload)
                }
            }
        case ORDER:
            return {
                ...state,
                myFavorites: action.payload === 'A' ? [...state.myFavorites.sort((a, b) => a.id - b.id)] : [...state.myFavorites.sort((a, b) => b.id - a.id)]
            }
        default:
            return { ...state }
    }
};

export default rootReducer;