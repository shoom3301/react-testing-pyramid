import axios, { AxiosPromise } from 'axios';
import { IQuote, QuoteId, IQuoteBlank } from '../../interfaces/IQuote';

export function loadQuotesList(): AxiosPromise<IQuote[]> {
    return axios.get('/api/quotes').then(({data}) => data);
}

export function loadQuote(id: QuoteId): AxiosPromise<IQuote> {
    return axios.get('/api/quote', {params: {id}}).then(({data}) => data);
}

export function createQuote(quote: IQuoteBlank): AxiosPromise<IQuote> {
    return axios.post('/api/quote', quote).then(({data}) => data);
}
