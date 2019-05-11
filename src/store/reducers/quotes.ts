import { IAction } from '../../interfaces/IAction';
import { QuotesActionTypes, QuoteFetchOneSuccessAction } from '../actions/quotes';
import { defaultQuotesState } from '../states/quotes';

export function quotes(state = defaultQuotesState, action: IAction<QuotesActionTypes>) {
    switch (action.type) {
        case QuotesActionTypes.FETCH_ALL_SUCCESS: {
            return {quotes: action.payload};
        }

        case QuotesActionTypes.CREATED_SUCCESS: {
            return {quotes: [...state.quotes, action.payload]};
        }

        case QuotesActionTypes.FETCH_ONE_SUCCESS: {
            const quote = (action as QuoteFetchOneSuccessAction).payload;
            const {quotes} = state;
            const existing = quotes.find(({id}) => id === quote.id);

            if (existing) {
                return state;
            }

            return {
                quotes: [...quotes, quote]
            }
        }

        default:
            return state;
    }
}