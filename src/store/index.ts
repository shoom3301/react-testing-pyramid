import { createStore } from 'redux';
import { counter } from './reducers/counter';

export const store = createStore(counter);