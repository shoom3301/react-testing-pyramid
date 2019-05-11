import { routerMiddleware } from 'connected-react-router';
import { createStore, compose, applyMiddleware } from 'redux';
import { sagaMiddleware, runSaga } from './middlewares';
import { reducers } from './reducers';
import { history } from 'router/router';

export const store = createStore(
    reducers,
    compose(
        applyMiddleware(
            routerMiddleware(history),
            sagaMiddleware
        )
    )
);

runSaga();