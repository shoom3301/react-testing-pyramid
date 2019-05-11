import { RouterState } from 'connected-react-router';
import { IQuotesState } from './quotes';

export interface IState {
    quotes: IQuotesState;
    router: RouterState;
}