import { createSelector } from 'reselect';
import { IState } from '../states';
import { CounterState } from '../states/counter';

export function counterSelector(state: IState): CounterState {
    return state.counter;
}

// TODO: set generic types for createSelector
export const countSelector = createSelector(counterSelector, ({count}) => count);
export const savingSelector = createSelector(counterSelector, ({saving}) => saving);