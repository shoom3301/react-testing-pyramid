import { IQuote } from '../../../interfaces/IQuote';

export interface IQuotesListState {
    quotes: IQuote[];
}

export interface IQuotesProps extends IQuotesListState {
}
