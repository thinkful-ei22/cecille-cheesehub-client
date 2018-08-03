import {
    FETCH_CHEESES_REQUEST,
    FETCH_CHEESES_SUCCESS,
    FETCH_CHEESES_ERROR
} from '../actions/cheese';

const initialState = {
    cheeses: [],
    loading: false,
    error: null
};

export function reducer(state=initialState, action) {
    if (action.type === FETCH_CHEESES_REQUEST) {
        return Object.assign({}, state, {
            loading: true,
            error: null
        });
    }
    else if (action.type === FETCH_CHEESES_SUCCESS) {
        return Object.assign({}, state, {
            cheeses: [action.cheeses],
            loading: false,
            error: null
        });
    }
    else if (action.type === FETCH_CHEESES_ERROR) {
        return Object.assign({}, state, {
            loading: false,
            error: action.error,
        });
    }
    return state;
}
