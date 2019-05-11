import { IQuote, QuoteId } from '../../interfaces/IQuote';
import { generateQuoteId } from './generateQuoteId';

export function fetchQuoteFromServer(quoteId: QuoteId): Promise<IQuote> {
    const quote: IQuote = {
        id: quoteId,
        text: `Quote ${generateQuoteId(10, 99)}`,
        author: `Alexandr ${generateQuoteId(100, 999)}`
    };

    return new Promise<IQuote>((resolve, reject) => {
        setTimeout(() => {
            if (window.location.search === '?fetchQuote=error') {
                reject(new Error());
            } else {
                resolve(quote);
            }
        }, 100);
    });
}
