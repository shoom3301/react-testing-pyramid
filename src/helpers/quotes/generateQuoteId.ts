import { QuoteId } from '../../interfaces/IQuote';

export function generateQuoteId(min: number, max: number): QuoteId {
    return Math.ceil(Math.random() * (max - min) + min);
}