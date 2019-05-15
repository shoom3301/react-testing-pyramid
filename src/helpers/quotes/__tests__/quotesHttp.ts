import axios from 'axios';
import { Pact } from '@pact-foundation/pact';
import { InteractionObject, Matchers } from '@pact-foundation/pact';
import { getProvider, pactConfig } from '../../../../pact/pactSetup';
import { quotesMock } from '../../../test-utils/mocks/qoutes.mock';
import { loadQuotesList, loadQuote, createQuote } from '../quotesHttp';

describe('Http requests to quotes API', () => {
    let provider: Pact;

    beforeAll( async () => {
        axios.defaults.baseURL = `http://localhost:${pactConfig.port}`;

        provider = getProvider();

        await provider.setup();
    });

    afterAll(async () => {
        await provider.finalize();
    });

    beforeEach(async () => {
        await provider.removeInteractions();
    });
    afterEach(async () => {
        await provider.verify();
    });

    it('loadQuotesList() - requests a list of quotes',  async () => {
        const quote = quotesMock[0];
        const interaction: InteractionObject = {
            state: 'Requests quotes list',
            uponReceiving: 'Quotes list',
            withRequest: {
                method: 'GET',
                path: '/api/quotes',
                query: '',
                headers: {
                    Accept: 'application/json, text/plain, */*'
                }
            },
            willRespondWith: {
                status: 200,
                headers: {
                    'content-type': 'application/json'
                },
                body: Matchers.eachLike(Matchers.like(quote), {min: 1})
            }
        };

        await provider
            .addInteraction(interaction)
            .then(() => loadQuotesList());
    });

    it('loadQuote() - requests quote by id', async () => {
        const quote = quotesMock[0];
        const interaction: InteractionObject = {
            state: 'Requests quote by id',
            uponReceiving: 'Quote by id',
            withRequest: {
                method: 'GET',
                path: '/api/quote',
                query: {
                    id: `${quote.id}`
                },
                headers: {
                    Accept: 'application/json, text/plain, */*'
                }
            },
            willRespondWith: {
                status: 200,
                headers: {
                    'content-type': 'application/json'
                },
                body: Matchers.like(quote)
            }
        };

        await provider
            .addInteraction(interaction)
            .then(() => loadQuote(quote.id));
    });

    it('createQuote() - quote creating', async () => {
        const quote = quotesMock[0];
        const interaction: InteractionObject = {
            state: 'Quote creating',
            uponReceiving: 'Quote',
            withRequest: {
                method: 'POST',
                path: '/api/quote',
                query: '',
                headers: {
                    Accept: 'application/json, text/plain, */*',
                    'content-type': 'application/json;charset=utf-8'
                },
                body: {
                    text: quote.text,
                    author: quote.author
                }
            },
            willRespondWith: {
                status: 200,
                headers: {
                    'content-type': 'application/json'
                },
                body: Matchers.like(quote)
            }
        };

        await provider
            .addInteraction(interaction)
            .then(() => createQuote({text: quote.text, author: quote.author}));
    });
});