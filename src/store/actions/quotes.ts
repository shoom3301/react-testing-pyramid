import { IAction } from '../../interfaces/IAction';
import { IQuoteBlank, IQuote } from '../../interfaces/IQuote';

export enum QuotesActionTypes {
    CREATE = 'CREATE',
    CREATED_SUCCESS = 'CREATED_SUCCESS',
    CREATED_FAIL = 'CREATED_FAIL',
}

export type CreateQuoteAction = IAction<QuotesActionTypes.CREATE, IQuoteBlank>;
export type QuoteCreateSuccessAction = IAction<QuotesActionTypes.CREATED_SUCCESS, IQuote>;
export type QuoteCreateFailAction = IAction<QuotesActionTypes.CREATED_FAIL, Error>;

export function createQuote(quote: IQuoteBlank): CreateQuoteAction {
    return {
        type: QuotesActionTypes.CREATE,
        payload: quote
    };
}

export function quoteCreatedSuccess(quote: IQuote): QuoteCreateSuccessAction {
    return {
        type: QuotesActionTypes.CREATED_SUCCESS,
        payload: quote
    };
}

export function quoteCreatedError(error: Error): QuoteCreateFailAction {
    return {
        type: QuotesActionTypes.CREATED_FAIL,
        payload: error
    };
}