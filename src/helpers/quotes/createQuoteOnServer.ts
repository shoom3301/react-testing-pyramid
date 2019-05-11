import { IQuoteBlank, IQuote } from '../../interfaces/IQuote';
import { generateQuoteId } from './generateQuoteId';

export function createQuoteOnServer(quote: IQuoteBlank): Promise<IQuote> {
    const id = generateQuoteId(1000, 9999);
    const newQuote: IQuote = {...quote, id};

    return new Promise<IQuote>((resolve, reject) => {
        setTimeout(() => {
            if (window.location.search === '?createQuote=error') {
                reject(new Error());
            } else {
                resolve(newQuote);
            }
        }, 500);
    });
}