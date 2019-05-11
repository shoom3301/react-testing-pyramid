import { IAction } from '../../interfaces/IAction';
import { IQuoteBlank, IQuote, QuoteId } from '../../interfaces/IQuote';

export enum QuotesActionTypes {
    CREATE = 'CREATE',
    CREATED_SUCCESS = 'CREATED_SUCCESS',
    CREATED_FAIL = 'CREATED_FAIL',
    FETCH_ONE = 'FETCH_ONE',
    FETCH_SUCCESS = 'FETCH_SUCCESS',
    FETCH_FAIL = 'FETCH_FAIL',
}

export type CreateQuoteAction = IAction<QuotesActionTypes.CREATE, IQuoteBlank>;
export type QuoteCreateSuccessAction = IAction<QuotesActionTypes.CREATED_SUCCESS, IQuote>;
export type QuoteCreateFailAction = IAction<QuotesActionTypes.CREATED_FAIL, Error>;
export type QuoteFetchOneAction = IAction<QuotesActionTypes.FETCH_ONE, QuoteId>;
export type QuoteFetchSuccessAction = IAction<QuotesActionTypes.FETCH_SUCCESS, IQuote>;
export type QuoteFetchFailAction = IAction<QuotesActionTypes.FETCH_FAIL, Error>;

export function createQuote(quote: IQuoteBlank): CreateQuoteAction {
    return {
        type: QuotesActionTypes.CREATE,
        payload: quote
    };
}

export function quoteCreateSuccess(quote: IQuote): QuoteCreateSuccessAction {
    return {
        type: QuotesActionTypes.CREATED_SUCCESS,
        payload: quote
    };
}

export function quoteCreateError(error: Error): QuoteCreateFailAction {
    return {
        type: QuotesActionTypes.CREATED_FAIL,
        payload: error
    };
}

export function quoteFetchOne(quoteId: QuoteId): QuoteFetchOneAction {
    return {
        type: QuotesActionTypes.FETCH_ONE,
        payload: quoteId
    };
}

export function quoteFetchSuccess(quote: IQuote): QuoteFetchSuccessAction {
    return {
        type: QuotesActionTypes.FETCH_SUCCESS,
        payload: quote
    };
}

export function quoteFetchError(error: Error): QuoteFetchFailAction {
    return {
        type: QuotesActionTypes.FETCH_FAIL,
        payload: error
    };
}