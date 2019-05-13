import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { API_QUOTE_PATH } from '../../../helpers/quotes/quotesHttp';
import { IQuoteBlank, IQuote } from '../../../interfaces/IQuote';
import { HTTP_ERROR_500 } from '../../../test-utils/axiosMocks';
import { recordSaga } from '../../../test-utils/recordSaga';
import { quoteCreate, quoteCreateSuccess, QuotesActionTypes, quoteCreateError } from '../../actions/quotes';
import { quoteCreation } from '../quotes';

describe('Сайдэффекты для работы с цитатами', () => {
    const mock = new MockAdapter(axios);
    const quoteBlank: IQuoteBlank = {text: 'aaa', author: 'bbb'};
    const quote: IQuote = {id: 1, ...quoteBlank};

    describe('Создание цитаты', () => {
        const createAction = quoteCreate(quoteBlank);

        it(`Цитата должна быть создана на сервере и добавлена в store событием ${QuotesActionTypes.CREATED_SUCCESS}`, () => {
            mock.onPost(API_QUOTE_PATH).reply(200, quote);

            return recordSaga(quoteCreation, createAction)
                .then(dispatched => {
                    expect(dispatched).toEqual([quoteCreateSuccess(quote)]);
                });
        });

        it(`При получении ошибки от сервера должен создавать событие ${QuotesActionTypes.CREATED_FAIL}`, () => {
            mock.onPost(API_QUOTE_PATH).reply(500);

            return recordSaga(quoteCreation, createAction)
                .then(dispatched => {
                    expect(dispatched).toEqual([quoteCreateError(HTTP_ERROR_500)]);
                });
        });
    });
});