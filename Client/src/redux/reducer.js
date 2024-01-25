import { ADD_FAVORITE, CLEAN_DETAIL, DELETE_FAVORITE, GET_ALL_CHARACTERS, GET_CHARACTER_BY_ID, GET_EPISODES, GET_USER_DATA, LOGIN, LOGOUT } from "./Actions/action-types";

const initialState = {
  allCharacters: [],
  allCharactersDuplicate: [],
  characterData: [],
  myFavorites: [],
  myFavoritesDuplicate: [],
  userData: {},
  allEpisodes: []
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CHARACTER_BY_ID:
      return {
        ...state,
        characterData: payload
      }

    case GET_ALL_CHARACTERS:
      return {
        ...state,
        allCharacters: payload,
        allCharactersDuplicate: payload
      };

    case CLEAN_DETAIL:
      return {
        ...state,
        characterData: []
      }

    case ADD_FAVORITE:
      return {
        ...state,
        myFavorites: payload,
        myFavoritesDuplicate: payload
      };

    case DELETE_FAVORITE:
      return {
        ...state,
        myFavorites: payload,
        myFavoritesDuplicate: payload
      };

    case LOGIN:
      console.log(payload);
      localStorage.setItem("accessToken", payload.accessToken)
      localStorage.setItem("userId", payload.user._id)
      return {
        ...state,
        userData: payload
      };

    case LOGOUT:
      localStorage.clear();
      return {
        ...state,
        userData: {}
      }

    case GET_USER_DATA:
      return {
        ...state,
        userData: payload
      }

    case GET_EPISODES:
      return {
        ...state,
        allEpisodes: payload
      }

    default:
      return { ...state };
  };
};

export default rootReducer;

// case FILTER:
//   if (action.payload === 'AllGenders') {
//     return {
//       ...state,
//       myFavorites: state.allCharacters
//     }
//   } else {
//     return {
//       ...state,
//       myFavorites: state.allCharacters.filter(character => character.gender === action.payload)
//     }
//   }
// case ORDER:
//   return {
//     ...state,
//     myFavorites: action.payload === 'A' ? [...state.myFavorites.sort((a, b) => a.id - b.id)] : [...state.myFavorites.sort((a, b) => b.id - a.id)]
//   }