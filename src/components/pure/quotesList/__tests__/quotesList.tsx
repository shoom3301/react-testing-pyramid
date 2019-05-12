import React from 'react';
import { MemoryRouter } from 'react-router';
import { quotesMock } from '../../../../mocks/qoutes.mock';
import { quotePageRoute } from '../../../../router/routerPaths';
import { QuotesList } from '../quotesList';
import { QuoteItem, QuoteText, QuoteAuthor } from '../qutesList.elements';
import { create, ReactTestRenderer, ReactTestInstance } from 'react-test-renderer';

describe('QuotesList - компонент списка цитат', () => {
    const [firstQuote] = quotesMock;

    let container: ReactTestRenderer;
    let instance: ReactTestInstance;

    beforeEach(() => {
        container = create(<MemoryRouter><QuotesList quotes={quotesMock} /></MemoryRouter>);
        instance = container.root;

    });

    afterEach(() => {
        container.unmount();
    });

    it('Snapshot of component is match', () => {
        expect(container.toJSON()).toMatchSnapshot();
    });

    /**
     * TODO: other tests is legacy
     * @see https://www.valentinog.com/blog/testing-react/
     */
    it('Количество отображенных цитат совпадает с входными данными', async () => {
        const quotesList = instance.findAllByType(QuoteItem);

        expect(quotesList.length).toBe(quotesMock.length);
    });

    it('Текст первой цитаты соответствует', async () => {
        const [quoteText] = instance.findAllByType(QuoteText);
        const text = quoteText.props.children;

        expect(text).toBe(firstQuote.text);
    });

    it('Имя автора первой цитаты соответствует', async () => {
        const [quoteAuthor] = instance.findAllByType(QuoteAuthor);
        const text = quoteAuthor.props.children;

        expect(text).toBe(firstQuote.author);
    });

    it('У первой цитаты установленна ссылка на ее страницу', async () => {
        const [quoteItem] = instance.findAllByType(QuoteItem);

        expect(quoteItem.props.to).toBe(quotePageRoute(firstQuote.id));
    });
});
