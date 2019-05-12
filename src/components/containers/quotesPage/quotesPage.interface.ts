import { IQuote } from '../../../interfaces/IQuote';

export interface IQuotesPageDispatchProps {
    fetchAll(): void;
}

export interface IQuotesPageStateProps {
    quotes: IQuote[];
}

export interface IQuotesPageProps extends IQuotesPageDispatchProps, IQuotesPageStateProps {
}

export interface IQuotesPageState {
    formIsOpened: boolean;
}