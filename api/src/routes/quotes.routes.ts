import {IncomingMessage} from 'http';
import {
  createNewQuote,
  findQuoteById,
  getRequestQuoteId,
  loadQuotes,
  saveQuotes,
  validateQuoteCreateRequest,
  validateQuoteId
} from '../utils/quotes.utils';
import {createRequestResolver, getRequestJson} from '../utils/server.utils';
import {IQuote} from '../models/IQuote';
import {BadRequestError} from '../models/BadRequestError';
import {IQuoteCreateRequest} from '../models/IQuoteCreateRequest';
import {Routes} from '../models/Routes';

async function quotesGetList(): Promise<IQuote[]> {
  return loadQuotes();
}

async function quotesGetOne(req: IncomingMessage): Promise<IQuote | null> {
  const id = getRequestQuoteId(req);
  const quoteIdIsValid = validateQuoteId(id);

  if (!quoteIdIsValid) {
    throw new BadRequestError('Quote id is not valid!');
  }

  const quotes = loadQuotes();

  return findQuoteById(quotes, id);
}

async function quotesCreate(req: IncomingMessage): Promise<IQuote> {
  const quoteCreateRequest = await getRequestJson<IQuoteCreateRequest>(req);
  const createQuoteRequestIsValid = validateQuoteCreateRequest(quoteCreateRequest);

  if (!createQuoteRequestIsValid) {
    throw new BadRequestError('Quote create request is not valid!');
  }

  const quotes = loadQuotes();
  const quote = createNewQuote(quoteCreateRequest, quotes);

  saveQuotes([...quotes, quote]);

  return quote;
}

export const quotesRoutes: Routes = {
  'GET /quotes': createRequestResolver<IQuote[]>(quotesGetList, 'Get quotes list'),
  'GET /quote': createRequestResolver<IQuote | null>(quotesGetOne, 'Get one quote'),
  'POST /quote': createRequestResolver<IQuote>(quotesCreate, 'Create quote')
};
