import { IAction } from '../../interfaces/IAction';
import { QuotesActionTypes } from '../actions/quotes';
import { defaultQuotesState } from '../states/quotes';

export function quotes(state = defaultQuotesState, action: IAction<QuotesActionTypes>) {
    switch (action.type) {
        case QuotesActionTypes.CREATED_SUCCESS:
            return {quotes: [...state.quotes, action.payload]};
        default:
            return state;
    }
}