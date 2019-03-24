import {
    FETCH_ALL_CHARACTERS,
    FETCH_CHARACTER_BY_ID
} from '../actions/types';

const INITIAL_STATE = {
    characters: {
        isLoading: false,
        items: [],
    },
    character: {
        isLoading: false,
        current: {}
    }
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_ALL_CHARACTERS:
            return {
                ...state,
                characters: {
                    ...state.characters,
                    isLoading: false,
                    items: state.characters.items.concat(action.payload),
                }
            }
        case FETCH_CHARACTER_BY_ID:
            return {
                ...state,
                character: {
                    ...state.character,
                    current: action.payload,
                },
            }
        default:
            return state
    }
}