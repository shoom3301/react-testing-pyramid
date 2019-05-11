import { IQuote } from '../../interfaces/IQuote';

export interface IQuotesState {
    quotes: IQuote[];
}

export const defaultQuotesState: IQuotesState = {
    quotes: []
};