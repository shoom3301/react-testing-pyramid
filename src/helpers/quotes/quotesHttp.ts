import axios, { AxiosPromise } from 'axios';
import { IQuote, QuoteId, IQuoteBlank } from '../../interfaces/IQuote';

export const API_QUOTE_PATH = '/api/quote';
export const API_QUOTES_PATH = '/api/quotes';

export function loadQuotesList(): AxiosPromise<IQuote[]> {
    return axios.get(API_QUOTES_PATH).then(({data}) => data);
}

export function loadQuote(id: QuoteId): AxiosPromise<IQuote> {
    return axios.get(API_QUOTE_PATH, {params: {id}}).then(({data}) => data);
}

export function createQuote(quote: IQuoteBlank): AxiosPromise<IQuote> {
    return axios.post(API_QUOTE_PATH, quote).then(({data}) => data);
}
