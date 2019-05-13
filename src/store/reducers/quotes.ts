import { IAction } from '../../interfaces/IAction';
import { QuotesActionTypes, QuoteFetchOneSuccessAction } from '../actions/quotes';
import { defaultQuotesState, QuotesState } from '../states/quotes';

export function quotesReducer(state = defaultQuotesState, action: IAction<QuotesActionTypes>): QuotesState {
    switch (action.type) {
        case QuotesActionTypes.FETCH_ALL_SUCCESS: {
            return [...action.payload];
        }

        case QuotesActionTypes.CREATED_SUCCESS: {
            return [...state, action.payload];
        }

        case QuotesActionTypes.FETCH_ONE_SUCCESS: {
            const quote = (action as QuoteFetchOneSuccessAction).payload;
            const existing = state.find(({id}) => id === quote.id);

            return existing
                ? state
                : [...state, quote];
        }

        default:
            return state;
    }
}