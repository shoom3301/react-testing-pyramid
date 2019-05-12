import { createSelector } from 'reselect';
import { QuoteId, IQuote } from '../../../interfaces/IQuote';
import { getQuoteIdByLocation, getCurrentQuoteByLocation } from '../../../store/selectors/quotes';

export const quotePageSelector = createSelector(
    getQuoteIdByLocation,
    getCurrentQuoteByLocation,
    (quoteId: QuoteId | null, quote: IQuote | null) => {
        return {
            quoteId,
            quote
        }
    }
);