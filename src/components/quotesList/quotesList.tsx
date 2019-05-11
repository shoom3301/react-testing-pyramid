import React, { Component } from 'react';
import { connect } from 'react-redux';
import { quotesSelector } from '../../store/selectors/quotes';
import { IQuotesProps } from './quotesList.interface';
import { QuoteItem, QuoteText, QuoteAuthor } from './qutesList.elements';

export class QuotesListComponent extends Component<IQuotesProps> {
    render(): React.ReactElement {
        return (
            <div>
                {this.props.quotes.map(({text, author, id}) => (
                    <QuoteItem key={id}>
                        <QuoteText>{text}</QuoteText>
                        <br />
                        <QuoteAuthor>{author}</QuoteAuthor>
                    </QuoteItem>
                ))}
            </div>
        );
    }
}

export const QuotesList = connect(quotesSelector)(QuotesListComponent);
