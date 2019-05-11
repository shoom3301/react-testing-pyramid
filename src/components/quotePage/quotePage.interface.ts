import { QuoteId, IQuote } from '../../interfaces/IQuote';

export interface IQuotePageDispatchProps {
    fetchQuote(quoteId: QuoteId): void;
}

export interface IQuotePageStateProps {
    quoteId: QuoteId | null;
    quote: IQuote | null;
}

export interface IQuotePageProps extends IQuotePageDispatchProps, IQuotePageStateProps {
}
