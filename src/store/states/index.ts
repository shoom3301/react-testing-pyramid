import { RouterState } from 'connected-react-router';
import { QuotesState } from './quotes';

export interface IState {
    quotes: QuotesState;
    router: RouterState;
}