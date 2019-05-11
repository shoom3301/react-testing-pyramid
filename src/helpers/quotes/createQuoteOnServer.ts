import { IQuoteBlank, IQuote } from '../../interfaces/IQuote';

export function createQuoteOnServer(quote: IQuoteBlank): Promise<IQuote> {
    const id = getId(1000, 9999);
    const newQuote: IQuote = {...quote, id};

    return new Promise<IQuote>((resolve, reject) => {
        setTimeout(() => {
            if (window.location.search === '?SomeBad=happened') {
                reject(new Error());
            } else {
                resolve(newQuote);
            }
        }, 800);
    });
}

function getId(min: number, max: number): number {
    return Math.ceil(Math.random() * (max - min) + min);
}