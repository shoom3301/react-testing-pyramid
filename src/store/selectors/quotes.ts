import { createMatchSelector } from 'connected-react-router';
import { createSelector } from 'reselect';
import { quotePageRoute, quoteIdParam } from 'router/routerPaths';
import { QuoteId, IQuote } from '../../interfaces/IQuote';
import { IState } from '../states';
import { QuotesState } from '../states/quotes';

export const getQuotesList = ({quotes}: IState): QuotesState => quotes;

export const getQuoteIdMatch = createMatchSelector<IState, {quoteId: string}>(
    quotePageRoute()
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
