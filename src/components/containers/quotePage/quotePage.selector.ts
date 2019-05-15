import { createSelector } from 'reselect';
import { QuoteId, IQuote } from 'interfaces/IQuote';
import { getQuoteIdByLocation, getCurrentQuoteByLocation } from 'store/selectors/quotes';
import { IState } from 'store/states';
import { IQuotePageStateProps } from './quotePage.interface';

export const quotePageSelector = createSelector<IState, QuoteId | null, IQuote | null, IQuotePageStateProps>(
    getQuoteIdByLocation,
    getCurrentQuoteByLocation,
    (quoteId: QuoteId | null, quote: IQuote | null) => {
        return {
            quoteId,
            quote
        }
    }
);