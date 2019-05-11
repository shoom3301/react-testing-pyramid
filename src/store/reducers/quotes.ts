import { IAction } from '../../interfaces/IAction';
import { defaultQuotesState } from '../states/quotes';

export function quotes(state = defaultQuotesState, action: IAction<any>) {
    switch (action.type) {
        default:
            return state;
    }
}