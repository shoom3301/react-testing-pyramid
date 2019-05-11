import { IQuote } from '../../interfaces/IQuote';

export interface IQuotesState {
    quotes: IQuote[];
}

export const defaultQuotesState: IQuotesState = {
    quotes: [
        {
            id: 1,
            text: 'Start',
            author: 'Typing'
        },
        {
            id: 2,
            text: 'Stop',
            author: 'Typing'
        },
    ]
};