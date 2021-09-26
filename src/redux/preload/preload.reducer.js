import { preloadTypes } from './preload.types';

const INITIAL_STATE = {
    preload: false
}

export const preloadReducer = ( state = INITIAL_STATE, action) => {
    switch(action.type){
        case preloadTypes.PRELOAD_VISIBLE:
            return {
                ...state,
                preload: true
            };
        case preloadTypes.PRELOAD_INVISIBLE:
            return {
                ...state,
                preload: false
            }
        default:
            return state
    };
};