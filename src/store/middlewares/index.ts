import createSagaMiddleware from 'redux-saga';
import { quotesMiddleware } from './quotes';

export const sagaMiddleware = createSagaMiddleware();

export function runSaga() {
    sagaMiddleware.run(appMiddleware);
}

function* appMiddleware() {
    yield quotesMiddleware();
}