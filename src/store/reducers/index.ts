import { combineReducers } from 'redux';
import { router } from '../../router';
import { counter } from './counter';
import { quotes } from './quotes';

export const reducers = combineReducers({
    router,
    counter,
    quotes
});