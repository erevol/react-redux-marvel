import {
    FETCH_ALL_CHARACTERS,
    FETCH_CHARACTER_BY_ID
} from './types';
import { getCharacters, getCharacterById } from '../services/marvelAPI';

export const fetchAllCharacters = () => async dispatch => {
    const response = await getCharacters();
    dispatch({
        type: FETCH_ALL_CHARACTERS,
        payload: response.data.results,
    })
};

export const fetchCharacterById = (character) => async dispatch => {
    const response = await getCharacterById(character);
    dispatch({
        type: FETCH_CHARACTER_BY_ID,
        payload: response.data.results[0],
    })
};