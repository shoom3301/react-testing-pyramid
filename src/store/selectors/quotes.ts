import { createMatchSelector } from 'connected-react-router';
import { createSelector } from 'reselect';
import { quotePageRoute, quoteIdParam } from 'router/routerPaths';
import { QuoteId, IQuote } from '../../interfaces/IQuote';
import { IState } from '../states';
import { IQuotesState } from '../states/quotes';

export function quotesSelector({quotes}: IState): IQuotesState {
    return quotes;
}

export const getQuotesList = createSelector(quotesSelector, ({quotes}) => quotes);

export const getQuoteIdMatch = createMatchSelector<IState, {quoteId: string}>(
    quotePageRoute(`:${quoteIdParam}`)
);

export const getQuoteIdByLocation = createSelector(getQuoteIdMatch, match => {
    if (!match) {
        return null;
    }

    const quoteId = parseInt(match.params[quoteIdParam]);

    if (Number.isNaN(quoteId)) {
        return null;
    }

    return quoteId;
});

export const getCurrentQuoteByLocation = createSelector(
    getQuoteIdByLocation,
    getQuotesList,
    (quoteId: QuoteId | null, quotes: IQuote[]) => {
        if (quoteId === null) {
            return null;
        }

        return quotes.find(({id}) => id === quoteId) || null;
    }
);

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

export const quotesPageSelector = createSelector(getQuotesList, quotes => ({quotes}));