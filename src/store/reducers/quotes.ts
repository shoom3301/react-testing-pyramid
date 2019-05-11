import { IAction } from '../../interfaces/IAction';
import { QuotesActionTypes, QuoteFetchSuccessAction } from '../actions/quotes';
import { defaultQuotesState } from '../states/quotes';

export function quotes(state = defaultQuotesState, action: IAction<QuotesActionTypes>) {
    switch (action.type) {
        case QuotesActionTypes.CREATED_SUCCESS: {
            return {quotes: [...state.quotes, action.payload]};
        }

        case QuotesActionTypes.FETCH_SUCCESS: {
            const quote = (action as QuoteFetchSuccessAction).payload;
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