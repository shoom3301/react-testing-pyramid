/// <reference types="cypress" />

describe('Цитаты великих людей', () => {
    const quotesListSelector = '#quotes-list';
    const createQuoteBtnSelector = '#create-quote-btn';
    const authorInpSelector = 'input[name="author"]';
    const textInpSelector = 'textarea[name="text"]';
    const quoteItemSelector = '.quote-item';
    const quoteTextSelector = '.quote-text';
    const quoteAuthorSelector = '.quote-author';
    const quotePageTextSelector = '.quote-page-text';
    const quotePageAuthorSelector = '.quote-page-author';

    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    it('На главной странице должен отображаться список цитат', () => {
        cy.get(quotesListSelector).children(quoteItemSelector).should($list => {
            expect($list.length).to.be.greaterThan(0);
        });
    });

    it('Созданная цитата должна добавляться в конец списка', () => {
        const seed = Date.now();
        const quoteText = `Some text ${seed}`;
        const quoteAuthor = `Some author ${seed}`;

        cy.get(authorInpSelector).type(quoteAuthor);
        cy.get(textInpSelector).type(quoteText);
        cy.get(createQuoteBtnSelector).click();

        cy.get(quotesListSelector).children(quoteItemSelector).last().as('lastQuoteItem');

        cy.get('@lastQuoteItem').find(quoteTextSelector).should('have.text', quoteText);
        cy.get('@lastQuoteItem').find(quoteAuthorSelector).should('have.text', quoteAuthor);
    });

    it('При клике на цитату должна открываться страница этой цитаты', () => {
        cy.get(quotesListSelector).children(quoteItemSelector).first().as('firstQuoteItem')
            .then($item => {
                const text = $item.find(quoteTextSelector).text();
                const author = $item.find(quoteAuthorSelector).text();

                cy.get('@firstQuoteItem').click();
                cy.url().should('match', /quote\/\d+/);

                cy.get(quotePageTextSelector).should('have.text', text);
                cy.get(quotePageAuthorSelector).should('have.text', author);
            });

    });
});