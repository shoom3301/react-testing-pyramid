import { combineReducers } from 'redux';
import { router } from '../../router';
import { counter } from './counter';

export const reducers = combineReducers({
    router,
    counter
});