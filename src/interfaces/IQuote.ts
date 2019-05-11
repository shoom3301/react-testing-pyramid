export interface IQuoteBlank {
    text: string;
    author: string;
}

export interface IQuote extends IQuoteBlank {
    id: number;
}
