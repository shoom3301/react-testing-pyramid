import { createSelector } from 'reselect';
import { getQuotesList } from '../../../store/selectors/quotes';

export const quotesPageSelector = createSelector(getQuotesList, quotes => ({quotes}));