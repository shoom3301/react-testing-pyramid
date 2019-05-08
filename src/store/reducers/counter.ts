import { IAction } from '../../interfaces/IAction';
import { CounterActionTypes } from '../actions/counter';
import { defaultState } from '../state';

export function counter(state = defaultState, action: IAction<CounterActionTypes>) {
    switch (action.type) {
        case CounterActionTypes.INCREMENT:
            return {count: state.count + 1};
        case CounterActionTypes.DECREMENT:
            return {count: state.count - 1};
        default:
            return state;
    }
}