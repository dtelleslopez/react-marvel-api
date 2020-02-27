import { CHARACTERS_FETCH_SUCCEEDED } from '../constants/action-types';

const initialState = {
  characters: [],
};

function rootReducer(state = initialState, action) {
  if (action.type === CHARACTERS_FETCH_SUCCEEDED) {
    return { ...state, characters: state.characters.concat(action.payload) };
  }

  return state;
}

export default rootReducer;
