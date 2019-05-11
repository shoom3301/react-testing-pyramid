import { CounterState } from './counter';
import { IQuotesState } from './quotes';

export interface IState {
    counter: CounterState;
    quotes: IQuotesState;
}