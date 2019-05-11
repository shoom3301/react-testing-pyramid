import React, { Component } from 'react';
import { connect } from 'react-redux';
import { QuoteItem, QuoteText, QuoteAuthor } from './qutesList.elements';

export class QuotesListComponent extends Component<void> {
    render(): React.ReactElement {
        return (
            <div>
                <QuoteItem>
                    <QuoteText>Start</QuoteText>
                    <br />
                    <QuoteAuthor>Typing</QuoteAuthor>
                </QuoteItem>
                <QuoteItem>
                    <QuoteText>Start</QuoteText>
                    <br />
                    <QuoteAuthor>Typing</QuoteAuthor>
                </QuoteItem>
            </div>
        );
    }
}

export const QuotesList = connect()(QuotesListComponent);
