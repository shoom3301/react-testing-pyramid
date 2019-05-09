import { IState } from '../state';

export function savingSelector(state: IState): boolean {
    return state.saving;
}