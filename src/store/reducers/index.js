
import { combineReducers } from 'redux';
import pathReducer from './path';
import userReducer from './user';


const rootReducer = combineReducers(
    {
        path: pathReducer,
        user: userReducer

    }

);

export default rootReducer;