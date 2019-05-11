import { IAction } from '../../interfaces/IAction';
import { IQuoteBlank, IQuote, QuoteId } from '../../interfaces/IQuote';

export enum QuotesActionTypes {
    CREATE = 'CREATE',
    CREATED_SUCCESS = 'CREATED_SUCCESS',
    CREATED_FAIL = 'CREATED_FAIL',
    FETCH_ONE = 'FETCH_ONE',
    FETCH_ONE_SUCCESS = 'FETCH_ONE_SUCCESS',
    FETCH_ONE_FAIL = 'FETCH_ONE_FAIL',
    FETCH_ALL = 'FETCH_ALL',
    FETCH_ALL_SUCCESS = 'FETCH_ALL_SUCCESS',
    FETCH_ALL_FAIL = 'FETCH_ALL_FAIL',
}

export type QuoteCreateAction = IAction<QuotesActionTypes.CREATE, IQuoteBlank>;
export type QuoteCreateSuccessAction = IAction<QuotesActionTypes.CREATED_SUCCESS, IQuote>;
export type QuoteCreateFailAction = IAction<QuotesActionTypes.CREATED_FAIL, Error>;

export type QuoteFetchOneAction = IAction<QuotesActionTypes.FETCH_ONE, QuoteId>;
export type QuoteFetchOneSuccessAction = IAction<QuotesActionTypes.FETCH_ONE_SUCCESS, IQuote>;
export type QuoteFetchOneFailAction = IAction<QuotesActionTypes.FETCH_ONE_FAIL, Error>;

export type QuoteFetchAllAction = IAction<QuotesActionTypes.FETCH_ALL>;
export type QuoteFetchAllSuccessAction = IAction<QuotesActionTypes.FETCH_ALL_SUCCESS, IQuote[]>;
export type QuoteFetchAllFailAction = IAction<QuotesActionTypes.FETCH_ALL_FAIL, Error>;

export function quoteCreate(quote: IQuoteBlank): QuoteCreateAction {
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

export function quoteFetchOneSuccess(quote: IQuote): QuoteFetchOneSuccessAction {
    return {
        type: QuotesActionTypes.FETCH_ONE_SUCCESS,
        payload: quote
    };
}

export function quoteFetchOneError(error: Error): QuoteFetchOneFailAction {
    return {
        type: QuotesActionTypes.FETCH_ONE_FAIL,
        payload: error
    };
}

export function quoteFetchAll(): QuoteFetchAllAction {
    return {
        type: QuotesActionTypes.FETCH_ALL,
        payload: undefined
    };
}

export function quoteFetchAllSuccess(quotes: IQuote[]): QuoteFetchAllSuccessAction {
    return {
        type: QuotesActionTypes.FETCH_ALL_SUCCESS,
        payload: quotes
    };
}

export function quoteFetchAllError(error: Error): QuoteFetchAllFailAction {
    return {
        type: QuotesActionTypes.FETCH_ALL_FAIL,
        payload: error
    };
}