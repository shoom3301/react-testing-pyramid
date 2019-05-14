import { ReactWrapper, mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter, Route } from 'react-router';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import { quotePageRoute, mainRoute } from '../../../../router/routerPaths';
import { initEnzyme } from 'test-utils/initEnzyme';
import { quotesMock } from 'test-utils/mocks/qoutes.mock';
import { generateState } from '../../../../test-utils/generateState';
import { QuotePage } from '../quotePage';
import { QuoteText, QuoteAuthor, ToMain } from '../quotePage.elements';

describe('QuotePage - компонент страницы цитаты', () => {
    const mockStore = configureStore();
    const [currentQuote] = quotesMock;
    const currentPath = quotePageRoute(currentQuote.id);
    const mainPageText = 'main page';

    let wrapper: ReactWrapper;
    let store: MockStoreEnhanced;

    beforeAll(() => {
        initEnzyme();
    });

    beforeEach(() => {
        store = mockStore(generateState(currentPath));
        wrapper = mount(
            <Provider store={store}>
                <MemoryRouter initialEntries={[currentPath]}
                              initialIndex={0}>
                    <Route exact path={mainRoute} render={() => mainPageText}/>
                    <Route exact path={quotePageRoute()} component={QuotePage}/>
                </MemoryRouter>
            </Provider>
        );
    });

    it('Отображенный текст цитаты соот-ет ожидаемому', () => {
        expect(wrapper.find(QuoteText).first().text()).toBe(currentQuote.text);
    });

    it('Отображенное имя автора цитаты соот-ет ожидаемому', () => {
        expect(wrapper.find(QuoteAuthor).first().text()).toBe(currentQuote.author);
    });

    it('При клике на "Вернуться к списку" роутит на страницу списка цитат', () => {
        wrapper.find(ToMain).first().simulate('click', {button: 0});

        expect(wrapper.text()).toBe(mainPageText);
    });
});