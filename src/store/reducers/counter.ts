import { IAction } from '../../interfaces/IAction';
import { CounterActionTypes } from '../actions/counter';
import { defaultState } from '../state';

export function counter(state = defaultState, action: IAction<CounterActionTypes>) {
    switch (action.type) {
        case CounterActionTypes.INCREMENT:
            return {...state, count: state.count + 1};
        case CounterActionTypes.DECREMENT:
            return {...state, count: state.count - 1};
        case CounterActionTypes.SAVE_START:
            return {...state, saving: true};
        case CounterActionTypes.SAVE_ERROR:
        case CounterActionTypes.SAVE_SUCCESS:
            return {...state, saving: false};
        default:
            return state;
    }
}