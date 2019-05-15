import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { API_QUOTE_PATH, API_QUOTES_PATH } from '../../../helpers/quotes/quotesHttp';
import { IQuoteBlank, IQuote } from '../../../interfaces/IQuote';
import { HTTP_ERROR_500 } from '../../../test-utils/axiosMocks';
import { recordSaga } from '../../../test-utils/recordSaga';
import {
    quoteCreate,
    quoteCreateSuccess,
    QuotesActionTypes,
    quoteCreateError,
    quoteFetchOne, quoteFetchOneSuccess, quoteFetchOneError, quoteFetchAll, quoteFetchAllSuccess, quoteFetchAllError
} from '../../actions/quotes';
import { quoteCreation, quoteFetching, quotesFetching } from '../quotes';

describe('Middlewares for quotes', () => {
    const mock = new MockAdapter(axios);
    const quoteBlank: IQuoteBlank = {text: 'aaa', author: 'bbb'};
    const quote: IQuote = {id: 1, ...quoteBlank};

    describe('Quote creation', () => {
        const createAction = quoteCreate(quoteBlank);

        it(`A quote should be created on server and be added to store by ${QuotesActionTypes.CREATED_SUCCESS}`, () => {
            mock.onPost(API_QUOTE_PATH).reply(200, quote);

            return recordSaga(quoteCreation, createAction)
                .then(dispatched => {
                    expect(dispatched).toEqual([quoteCreateSuccess(quote)]);
                });
        });

        it(`When server responds error, action ${QuotesActionTypes.CREATED_FAIL} should be created`, () => {
            mock.onPost(API_QUOTE_PATH).reply(500);

            return recordSaga(quoteCreation, createAction)
                .then(dispatched => {
                    expect(dispatched).toEqual([quoteCreateError(HTTP_ERROR_500)]);
                });
        });
    });

    describe('Quote fetching', () => {
        const fetchOneAction = quoteFetchOne(quote.id);

        it(`Quote should be fetched from server and be added to store by ${QuotesActionTypes.FETCH_ONE_SUCCESS}`, () => {
            mock.onGet(API_QUOTE_PATH).reply(200, quote);

            return recordSaga(quoteFetching, fetchOneAction)
                .then(dispatched => {
                    expect(dispatched).toEqual([quoteFetchOneSuccess(quote)]);
                });
        });

        it(`When server responds error, action ${QuotesActionTypes.FETCH_ONE_FAIL} should be created`, () => {
            mock.onGet(API_QUOTE_PATH).reply(500);

            return recordSaga(quoteFetching, fetchOneAction)
                .then(dispatched => {
                    expect(dispatched).toEqual([quoteFetchOneError(HTTP_ERROR_500)]);
                });
        });
    });

    describe('Quotes list fetching', () => {
        const fetchAllAction = quoteFetchAll();

        it(`Quotes list should be fetched from server and be added to store by  ${QuotesActionTypes.FETCH_ALL_SUCCESS}`, () => {
            mock.onGet(API_QUOTES_PATH).reply(200, [quote]);

            return recordSaga(quotesFetching, fetchAllAction)
                .then(dispatched => {
                    expect(dispatched).toEqual([quoteFetchAllSuccess([quote])]);
                });
        });

        it(`When server responds error, action ${QuotesActionTypes.FETCH_ALL_FAIL} should be created`, () => {
            mock.onGet(API_QUOTES_PATH).reply(500);

            return recordSaga(quotesFetching, fetchAllAction)
                .then(dispatched => {
                    expect(dispatched).toEqual([quoteFetchAllError(HTTP_ERROR_500)]);
                });
        });
    });
});