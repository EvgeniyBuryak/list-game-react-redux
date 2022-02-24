import { combineReducers } from "redux";
import gamesReducer from './games-reducer';
import uiReducer from './ui-reducer';

export default combineReducers({

    games: gamesReducer,
    ui: uiReducer

});