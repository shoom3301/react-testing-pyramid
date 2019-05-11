import { combineReducers } from 'redux';
import { router } from '../../router/router';
import { quotes } from './quotes';

export const reducers = combineReducers({
    router,
    quotes
});