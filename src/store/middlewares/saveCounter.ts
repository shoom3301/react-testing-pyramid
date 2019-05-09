import { call, put } from 'redux-saga/effects';
import { saveToLocalStorage } from '../../helpers/saveToLocalStorage';
import { IAction } from '../../interfaces/IAction';
import { CounterActionTypes, counterSaveSuccess, counterSaveError } from '../actions/counter';

export function* saveCounter(action: IAction<CounterActionTypes>) {
    const {count} = action.payload;

    try {
        yield call(saveToLocalStorage, count);

        yield put(counterSaveSuccess());
    } catch (e) {
        yield put(counterSaveError());
    }
}
