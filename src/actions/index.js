import {
  CHARACTERS_FETCH_REQUESTED,
  MORE_CHARACTERS_FETCH_REQUESTED,
} from '../constants/action-types';

export function fetchCharacters(payload) {
  return { type: CHARACTERS_FETCH_REQUESTED, payload };
}

export function fetchMoreCharacters(payload) {
  return { type: MORE_CHARACTERS_FETCH_REQUESTED, payload };
}
