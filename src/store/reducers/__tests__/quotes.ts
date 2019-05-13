import { IQuote } from 'interfaces/IQuote';
import {
    QuotesActionTypes,
    quoteFetchAllSuccess,
    quoteCreateSuccess,
    quoteFetchOneSuccess
} from '../../actions/quotes';
import { QuotesState } from '../../states/quotes';
import { quotesReducer } from '../quotes';

describe('Reducer for quotes', () => {
    const state: QuotesState = [];
    const quote: IQuote = {id: 2, text: 'ccc', author: 'ddd'};

    it(`${QuotesActionTypes.FETCH_ALL_SUCCESS} must replace quotes list in store`, () => {
        const newState = quotesReducer(state, quoteFetchAllSuccess([quote]));

        expect(newState).toEqual([quote]);
    });

    it(`${QuotesActionTypes.CREATED_SUCCESS} must append quote to the list in store`, () => {
        const newState = quotesReducer(state, quoteCreateSuccess(quote));

        expect(newState).toEqual([quote]);
    });

    it(`${QuotesActionTypes.FETCH_ONE_SUCCESS} must append quote to the list in store, if quote is not exist in list`, () => {
        const newState = quotesReducer(state, quoteFetchOneSuccess(quote));

        expect(newState).toEqual([quote]);
    });

    it(`${QuotesActionTypes.FETCH_ONE_SUCCESS} must do not append quote to the list in store, if quote is exist in list`, () => {
        const newState = quotesReducer([quote], quoteFetchOneSuccess(quote));

        expect(newState).toEqual([quote]);
    });
});