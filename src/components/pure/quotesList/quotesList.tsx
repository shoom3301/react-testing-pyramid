import React, { PureComponent } from 'react';
import { IQuotesProps } from './quotesList.interface';
import { QuoteItem, QuoteText, QuoteAuthor } from './qutesList.elements';

export class QuotesList extends PureComponent<IQuotesProps> {
    render(): React.ReactElement {
        return (
            <div>
                {this.props.quotes.map(({text, author, id}) => (
                    <QuoteItem key={id} to={`/quote/${id}`}>
                        <QuoteText>{text}</QuoteText>
                        <br />
                        <QuoteAuthor>{author}</QuoteAuthor>
                    </QuoteItem>
                ))}
            </div>
        );
    }
}
