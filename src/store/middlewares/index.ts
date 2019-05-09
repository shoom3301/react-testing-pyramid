import createSagaMiddleware from 'redux-saga';
import { CounterActionTypes } from '../actions/counter';
import { saveCounter } from './saveCounter';
import { takeLatest } from 'redux-saga/effects';

export const sagaMiddleware = createSagaMiddleware();

export function runSaga() {
    sagaMiddleware.run(appMiddleware);
}

function* appMiddleware() {
    yield takeLatest(CounterActionTypes.SAVE_START, saveCounter);
}