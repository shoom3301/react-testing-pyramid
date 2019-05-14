import { mount, ReactWrapper } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import { initEnzyme } from 'test-utils/initEnzyme';
import { quotesMock } from 'test-utils/mocks/qoutes.mock';
import { UIButton } from 'ui-elements/button';
import { QuoteCreateForm } from 'components/pure/quoteCreateForm/quoteCreateForm';
import { CloseForm } from 'components/pure/quoteCreateForm/qutesCreateForm.elements';
import { QuoteItem } from 'components/pure/quotesList/qutesList.elements';
import { QuotesPage } from '../quotesPage';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import { QuotesPageTitle } from '../quotesPage.elements';

describe('QuotesPage - компонент страницы цитат', () => {
    const mockStore = configureStore();
    const initialState = {quotes: quotesMock};

    let wrapper: ReactWrapper;
    let store: MockStoreEnhanced;

    beforeAll(() => {
        initEnzyme();
    });

    beforeEach(() => {
        store = mockStore(initialState);
        wrapper = mount(<Provider store={store}><MemoryRouter><QuotesPage/></MemoryRouter></Provider>);
    });

    it('Заголовок страницы содержит корректный текст', async () => {
        expect(wrapper.find(QuotesPageTitle).text()).toBe('Цитаты великих людей');
    });

    it('Список цитат отображен и кол-во цитат сопадает с входными данными', () => {
        expect(wrapper.find(QuoteItem).length).toBe(quotesMock.length);
    });

    it('Форма создания цитаты по-умолчанию открыта', () => {
        expect(wrapper.find(QuoteCreateForm).length).toBe(1);
    });

    it('При клике на кнопку "X" - форма закрывается', () => {
        wrapper.find(CloseForm).first().simulate('click');

        expect(wrapper.find(QuoteCreateForm).length).toBe(0);
    });

    it('При клике на конпку "Добавить цитату" - форма открывается',  () => {
        wrapper.find(CloseForm).first().simulate('click');
        wrapper.find(UIButton).first().simulate('click');

        expect(wrapper.find(QuoteCreateForm).length).toBe(1);
    });
});