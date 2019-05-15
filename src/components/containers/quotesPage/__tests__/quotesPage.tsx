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

describe('QuotesPage - quotes page component', () => {
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

    it('Title of page contains correct text', () => {
        expect(wrapper.find(QuotesPageTitle).text()).toBe('Quotes app');
    });

    it('Quotes list is displayed and count of displayed quotes matches the input data', () => {
        expect(wrapper.find(QuoteItem).length).toBe(quotesMock.length);
    });

    it('Quote create form is opened by default', () => {
        expect(wrapper.find(QuoteCreateForm).length).toBe(1);
    });

    it('Form is closing when "X" button is clicked', () => {
        wrapper.find(CloseForm).first().simulate('click');

        expect(wrapper.find(QuoteCreateForm).length).toBe(0);
    });

    it('Form is opening when "Create quote" button is clicked',  () => {
        wrapper.find(CloseForm).first().simulate('click');
        wrapper.find(UIButton).first().simulate('click');

        expect(wrapper.find(QuoteCreateForm).length).toBe(1);
    });
});