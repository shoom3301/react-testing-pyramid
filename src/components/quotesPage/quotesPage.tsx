import React, { Component } from 'react';
import { connect } from 'react-redux';
import { UIButton } from '../../ui-elements/button';
import { QuoteCreateForm } from '../quoteCreateForm/quoteCreateForm';
import { QuotesList } from '../quotesList/quotesList';
import { IQuotesPageState } from './quotesPage.interface';
import { QuotesPageTitle, QuotesPageContainer } from './qutesPage.elements';

export class QuotesPageComponent extends Component<void, IQuotesPageState> {
    static defaultState: IQuotesPageState = {formIsOpened: true};

    state = QuotesPageComponent.defaultState;

    toggleForm = () => {
        this.setState({formIsOpened: !this.state.formIsOpened});
    };

    render(): React.ReactElement {
        return (
            <QuotesPageContainer>
                <QuotesPageTitle>Цитаты великих людей</QuotesPageTitle>
                <QuotesList />
                <div>
                    { this.state.formIsOpened
                        ? <QuoteCreateForm onClose={this.toggleForm} />
                        : <UIButton onClick={this.toggleForm}>Add quote</UIButton>
                    }
                </div>
            </QuotesPageContainer>
        );
    }
}

export const QuotesPage = connect()(QuotesPageComponent);
