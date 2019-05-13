import { combineReducers } from 'redux';
import { router } from '../../router/router';
import { quotesReducer } from './quotes';

export const reducers = combineReducers({
    router,
    quotes: quotesReducer
});