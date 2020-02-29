import {
  CHARACTERS_FETCH_REQUESTED,
  CHARACTERS_FETCH_SUCCEEDED,
  CHARACTERS_FETCH_FAILED,
  MORE_CHARACTERS_FETCH_REQUESTED,
  MORE_CHARACTERS_FETCH_SUCCEEDED,
  MORE_CHARACTERS_FETCH_FAILED,
} from '../constants/action-types';

const initialState = {
  isLoading: false,
  pagination: {
    page: 1,
    limit: 20,
    total: 0,
  },
  characters: {},
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case CHARACTERS_FETCH_REQUESTED:
    case MORE_CHARACTERS_FETCH_REQUESTED:
      return { ...state, isLoading: true };
    case CHARACTERS_FETCH_SUCCEEDED:
    case MORE_CHARACTERS_FETCH_SUCCEEDED:
      return {
        ...state,
        isLoading: false,
        pagination: action.payload.pagination
          ? action.payload.pagination
          : state.pagination,
        characters: {
          ...state.characters,
          ...action.payload.characters.reduce((acc, curr) => {
            acc[curr.id] = curr;
            return acc;
          }, {}),
        },
      };
    case CHARACTERS_FETCH_FAILED:
    case MORE_CHARACTERS_FETCH_FAILED:
      return { ...state, isLoading: false };
    default:
      return state;
  }
}

export default rootReducer;
