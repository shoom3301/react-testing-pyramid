import { combineReducers } from 'redux';
import { counter } from './counter';

export const reducers = combineReducers({
    // router: connectRouter(history),
    counter
});