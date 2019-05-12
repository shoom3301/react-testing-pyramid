import {readFileSync, writeFileSync} from 'fs';
import {IncomingMessage} from 'http';
import {QUOTES_FILE_PATH} from '../config';
import {getRequestQueryParams} from './server.utils';
import {IQuoteCreateRequest} from '../models/IQuoteCreateRequest';
import {IQuote} from '../models/IQuote';

export function createNewQuote(quoteCreateRequest: IQuoteCreateRequest, quotes: IQuote[]): IQuote {
  return {
    id: getQuotesMaxId(quotes) + 1,
    text: quoteCreateRequest.text,
    author: quoteCreateRequest.author
  };
}

export function findQuoteById(quotes: IQuote[], id: number): IQuote | null {
  return quotes.find(q => q.id === id) || null;
}

export function validateQuoteId(id: number): boolean {
  return !isNaN(id) && id >= 0 && id <= 99999;
}

export function getRequestQuoteId(req: IncomingMessage): number {
  const params = getRequestQueryParams<{ id: string }>(req);

  return parseInt(params.id, 10);
}

export function getQuotesMaxId(quotes: IQuote[]): number {
  let maxId = 0;

  quotes.forEach(({id}) => {
    if (id > maxId) {
      maxId = id;
    }
  });

  return maxId;
}

export function validateQuoteCreateRequest(requestBody: IQuoteCreateRequest): boolean {
  return !!requestBody
    && typeof requestBody.author === 'string'
    && typeof requestBody.text === 'string'
    && requestBody.author.length >= 2 && requestBody.author.length <= 64
    && requestBody.text.length >= 2 && requestBody.text.length <= 256;
}

export function loadQuotes(): IQuote[] {
  return JSON.parse(readFileSync(QUOTES_FILE_PATH).toString());
}

export function saveQuotes(quotes: IQuote[]) {
  writeFileSync(QUOTES_FILE_PATH, JSON.stringify(quotes, undefined, 2));
}
