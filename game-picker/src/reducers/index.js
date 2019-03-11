import { combineReducers } from 'redux';
import gameReducer from './gameReducer';
import playoffReducer from './playoffReducer';

export default combineReducers({
    gameReducer,
    playoffReducer
});