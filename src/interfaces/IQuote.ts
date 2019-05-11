export interface IQuoteBlank {
    text: string;
    author: string;
}

export type QuoteId = number;

export interface IQuote extends IQuoteBlank {
    id: QuoteId;
}
