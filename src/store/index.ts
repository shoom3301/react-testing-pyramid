import { createStore, applyMiddleware } from 'redux';
import { sagaMiddleware, runSaga } from './middlewares';
import { counter } from './reducers/counter';

export const store = createStore(counter, applyMiddleware(sagaMiddleware));

runSaga();