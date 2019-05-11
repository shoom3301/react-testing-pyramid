import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mainRoute } from '../../routes';
import { QuotePageContainer, QuoteText, QuoteAuthor, ToMain } from './quotePage.elements';

export class QuotePageComponent extends Component<void> {
    render(): React.ReactElement {
        return (
            <QuotePageContainer>
                <div>
                    <QuoteText>Test</QuoteText>
                    <QuoteAuthor>123</QuoteAuthor>
                </div>
                <ToMain to={mainRoute}>Вернуться к списку</ToMain>
            </QuotePageContainer>
        );
    }
}

export const QuotePage = connect()(QuotePageComponent);
