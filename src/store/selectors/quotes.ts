import { IState } from '../states';
import { IQuotesState } from '../states/quotes';

export function quotesSelector({quotes}: IState): IQuotesState {
    return quotes;
}
