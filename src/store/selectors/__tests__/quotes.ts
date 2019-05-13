import { match } from 'react-router';
import { quotePageRoute } from 'router/routerPaths';
import { IState } from '../../states';
import { getQuotesList, getQuoteIdMatch, getQuoteIdByLocation, getCurrentQuoteByLocation } from '../quotes';

describe('Selectors for quotes', () => {
    const defaultQuoteId = 6;

    function createState(pathname = '', quoteId = defaultQuoteId): IState {
        return {
            router: {
                action: 'PUSH',
                location: {
                    pathname,
                    state: '',
                    search: '',
                    hash: '',
                }
            },
            quotes: [
                {id: quoteId, text: '666', author: '666'}
            ]
        };
    }

    it('getQuotesList() - must return list of quotes', () => {
        const state = createState();
        const result = getQuotesList(state);

        expect(result).toEqual(state.quotes);
    });

    it('getQuoteIdMatch() - must return match of quoteId from location, if quoteId is exist', () => {
        const state = createState(quotePageRoute(defaultQuoteId));
        const result = getQuoteIdMatch(state) as match<{quoteId: string}>;

        expect(result.params.quoteId).toEqual(defaultQuoteId.toString());
    });

    it('getQuoteIdMatch() - must return null, if quoteId is not exist', () => {
        const state = createState();
        const result = getQuoteIdMatch(state);

        expect(result).toBeNull();
    });

    it('getQuoteIdByLocation() - must return quoteId from location, if quoteId is exist and valid', () => {
        const state = createState(quotePageRoute(defaultQuoteId));
        const result = getQuoteIdByLocation(state);

        expect(result).toBe(defaultQuoteId);
    });

    it('getQuoteIdByLocation() - must return null, if quoteId is not exist in location', () => {
        const state = createState();
        const result = getQuoteIdByLocation(state);

        expect(result).toBeNull();
    });

    it('getCurrentQuoteByLocation() - must return quote from store, if quote with id from location is exist', () => {
        const state = createState(quotePageRoute(defaultQuoteId));
        const result = getCurrentQuoteByLocation(state);

        expect(result).toEqual(state.quotes[0]);
    });

    it('getCurrentQuoteByLocation() - must return null, if quoteId from location is not exist or invalid', () => {
        const state = createState();
        const result = getCurrentQuoteByLocation(state);

        expect(result).toBeNull();
    });

    it('getCurrentQuoteByLocation() -  must return null, if quote with id from location is not exist', () => {
        const state = createState(quotePageRoute(8));
        const result = getCurrentQuoteByLocation(state);

        expect(result).toBeNull();
    });
});