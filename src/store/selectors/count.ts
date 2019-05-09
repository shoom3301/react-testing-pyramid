import { IState } from '../state';

export function countSelector(state: IState): number {
    return state.count;
}