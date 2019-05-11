import React, { Component } from 'react';
import { connect } from 'react-redux';
import { QuoteCreateForm } from '../quoteCreateForm/quoteCreateForm';
import { QuotesList } from '../quotesList/quotesList';
import { QuotesPageTitle } from './qutesPage.elements';

export class QuotesPageComponent extends Component<any> {
    render(): React.ReactElement {
        return (
            <>
                <QuotesPageTitle>Quotes list</QuotesPageTitle>
                <QuotesList />
                <div>
                    <button>Add quote</button>
                    <QuoteCreateForm />
                </div>
            </>
        );
    }
}

export const QuotesPage = connect()(QuotesPageComponent);
