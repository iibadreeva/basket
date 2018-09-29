import { SET_BOOKS } from '../actions/books';

const initialState = {
    items: null,
    isReady: false,
};

export default (state = initialState, action) => {
    switch (action.type){
        case SET_BOOKS:
            return {
                ...state,
                items: action.payload,
                isReady: true
            };
        case 'SET_IS_READY':
            return {
                ...state,
                isReady: action.payload
            };
        default:
            return state;
    }
};