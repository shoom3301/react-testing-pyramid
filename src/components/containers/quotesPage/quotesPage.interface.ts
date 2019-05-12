import { IQuote, IQuoteBlank } from '../../../interfaces/IQuote';

export interface IQuotesPageDispatchProps {
    fetchAll(): void;
    createQuote(quote: IQuoteBlank): void;
}

export interface IQuotesPageStateProps {
    quotes: IQuote[];
}

export interface IQuotesPageProps extends IQuotesPageDispatchProps, IQuotesPageStateProps {
}

export interface IQuotesPageState {
    formIsOpened: boolean;
}