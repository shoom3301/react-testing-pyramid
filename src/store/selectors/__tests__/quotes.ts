import { match } from 'react-router';
import { quotePageRoute } from 'router/routerPaths';
import { generateState } from '../../../test-utils/generateState';
import { quotesMock } from '../../../test-utils/mocks/qoutes.mock';
import { getQuotesList, getQuoteIdMatch, getQuoteIdByLocation, getCurrentQuoteByLocation } from '../quotes';

describe('Selectors for quotes', () => {
    const currentQuoteIndex = 1;
    const defaultQuoteId = quotesMock[currentQuoteIndex].id;

    it('getQuotesList() - must return list of quotes', () => {
        const state = generateState();
        const result = getQuotesList(state);

        expect(result).toEqual(state.quotes);
    });

    it('getQuoteIdMatch() - must return match of quoteId from location, if quoteId is exist', () => {
        const state = generateState(quotePageRoute(defaultQuoteId));
        const result = getQuoteIdMatch(state) as match<{quoteId: string}>;

        expect(result.params.quoteId).toEqual(defaultQuoteId.toString());
    });

    it('getQuoteIdMatch() - must return null, if quoteId is not exist', () => {
        const state = generateState();
        const result = getQuoteIdMatch(state);

        expect(result).toBeNull();
    });

    it('getQuoteIdByLocation() - must return quoteId from location, if quoteId is exist and valid', () => {
        const state = generateState(quotePageRoute(defaultQuoteId));
        const result = getQuoteIdByLocation(state);

        expect(result).toBe(defaultQuoteId);
    });

    it('getQuoteIdByLocation() - must return null, if quoteId is not exist in location', () => {
        const state = generateState();
        const result = getQuoteIdByLocation(state);

        expect(result).toBeNull();
    });

    it('getCurrentQuoteByLocation() - must return quote from store, if quote with id from location is exist', () => {
        const state = generateState(quotePageRoute(defaultQuoteId));
        const result = getCurrentQuoteByLocation(state);

        expect(result).toEqual(state.quotes[currentQuoteIndex]);
    });

    it('getCurrentQuoteByLocation() - must return null, if quoteId from location is not exist or invalid', () => {
        const state = generateState();
        const result = getCurrentQuoteByLocation(state);

        expect(result).toBeNull();
    });

    it('getCurrentQuoteByLocation() -  must return null, if quote with id from location is not exist', () => {
        const state = generateState(quotePageRoute(8));
        const result = getCurrentQuoteByLocation(state);

        expect(result).toBeNull();
    });
});