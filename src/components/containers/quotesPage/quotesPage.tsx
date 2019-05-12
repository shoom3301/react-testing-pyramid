import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { quoteFetchAll } from '../../../store/actions/quotes';
import { quotesPageSelector } from '../../../store/selectors/quotes';
import { UIButton } from '../../../ui-elements/button';
import { QuoteCreateForm } from '../../pure/quoteCreateForm/quoteCreateForm';
import { QuotesList } from '../../pure/quotesList/quotesList';
import { IQuotesPageState, IQuotesPageDispatchProps, IQuotesPageProps } from './quotesPage.interface';
import { QuotesPageTitle, QuotesPageContainer } from './qutesPage.elements';

export class QuotesPageComponent extends Component<IQuotesPageProps, IQuotesPageState> {
    static defaultState: IQuotesPageState = {formIsOpened: true};

    state = QuotesPageComponent.defaultState;

    toggleForm = () => {
        this.setState({formIsOpened: !this.state.formIsOpened});
    };

    componentDidMount() {
        this.props.fetchAll();
    }

    render(): React.ReactElement {
        return (
            <QuotesPageContainer>
                <QuotesPageTitle>Цитаты великих людей</QuotesPageTitle>
                <QuotesList quotes={this.props.quotes}/>
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

function mapDispatchToProps(dispatch: Dispatch): IQuotesPageDispatchProps {
    return {
        fetchAll: () => dispatch(quoteFetchAll())
    }
}

export const QuotesPage = connect(quotesPageSelector, mapDispatchToProps)(QuotesPageComponent);
