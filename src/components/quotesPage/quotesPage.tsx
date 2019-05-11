import React, { Component } from 'react';
import { connect } from 'react-redux';
import { UIButton } from '../../ui-elements/button';
import { QuoteCreateForm } from '../quoteCreateForm/quoteCreateForm';
import { QuotesList } from '../quotesList/quotesList';
import { IQuotesPageState } from './quotesPage.interface';
import { QuotesPageTitle, QuotesPageContainer } from './qutesPage.elements';

export class QuotesPageComponent extends Component<void, IQuotesPageState> {
    state: IQuotesPageState = {
        formIsOpened: false
    };

    toggleForm = () => {
        this.setState({formIsOpened: !this.state.formIsOpened});
    };

    render(): React.ReactElement {
        return (
            <QuotesPageContainer>
                <QuotesPageTitle>Quotes list</QuotesPageTitle>
                <QuotesList />
                <div>
                    { this.state.formIsOpened
                        ? <QuoteCreateForm onClose={this.toggleForm} />
                        : <UIButton onClick={this.toggleForm}>Добавить цитату</UIButton>
                    }
                </div>
            </QuotesPageContainer>
        );
    }
}

export const QuotesPage = connect()(QuotesPageComponent);
