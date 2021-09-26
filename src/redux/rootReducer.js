import { combineReducers } from 'redux';

// REDUCERS
import { preloadReducer } from './preload/preload.reducer';

// ROOT
export default combineReducers({
    preloadState: preloadReducer,
});