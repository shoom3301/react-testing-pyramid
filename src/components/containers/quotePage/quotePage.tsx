import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { QuoteId } from '../../../interfaces/IQuote';
import { mainRoute } from '../../../router/routerPaths';
import { quoteFetchOne } from '../../../store/actions/quotes';
import { QuotePageContainer, QuoteText, QuoteAuthor, ToMain } from './quotePage.elements';
import { IQuotePageProps, IQuotePageDispatchProps } from './quotePage.interface';
import { quotePageSelector } from './quotePage.selector';

export class QuotePageComponent extends Component<IQuotePageProps> {
    componentDidMount() {
        // TODO: handle this condition
        if (this.props.quoteId === null) {
            return;
        }

        this.props.fetchQuote(this.props.quoteId);
    }

    render(): React.ReactElement {
        return (
            <QuotePageContainer>
                {this.props.quote
                && <div>
                    <QuoteText>{this.props.quote.text}</QuoteText>
                    <QuoteAuthor>{this.props.quote.author}</QuoteAuthor>
                </div>}
                <ToMain to={mainRoute}>Вернуться к списку</ToMain>
            </QuotePageContainer>
        );
    }
}

function mapDispatchToProps(dispatch: Dispatch): IQuotePageDispatchProps {
    return {
        fetchQuote: (quoteId: QuoteId) => dispatch(quoteFetchOne(quoteId))
    }
}

export const QuotePage = connect(quotePageSelector, mapDispatchToProps)(QuotePageComponent);

