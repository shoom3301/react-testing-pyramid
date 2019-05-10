import { IAction } from '../../interfaces/IAction';
import { CounterActionTypes } from '../actions/counter';
import { defaultCounterState } from '../states/counter';

export function counter(state = defaultCounterState, action: IAction<CounterActionTypes>) {
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