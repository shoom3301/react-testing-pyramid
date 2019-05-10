import { createStore, applyMiddleware } from 'redux';
import { sagaMiddleware, runSaga } from './middlewares';
import { reducers } from './reducers';

export const store = createStore(reducers, applyMiddleware(sagaMiddleware));

runSaga();