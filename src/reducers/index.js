import {
  CHARACTERS_FETCH_REQUESTED,
  CHARACTERS_FETCH_SUCCEEDED,
  CHARACTERS_FETCH_FAILED,
} from '../constants/action-types';

const initialState = {
  isLoading: false,
  characters: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case CHARACTERS_FETCH_REQUESTED:
      return { ...state, isLoading: true };
    case CHARACTERS_FETCH_SUCCEEDED:
      return {
        ...state,
        characters: state.characters.concat(action.payload),
        isLoading: false,
      };
    case CHARACTERS_FETCH_FAILED:
      return { ...state, isLoading: false };
    default:
      return state;
  }
}

export default rootReducer;
