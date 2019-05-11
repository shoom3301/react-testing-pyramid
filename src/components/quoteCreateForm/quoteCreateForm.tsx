import React, { Component, ChangeEvent } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { UIButton } from 'ui-elements/button';
import { UIInput } from 'ui-elements/input';
import { createQuote } from 'store/actions/quotes';
import { IQuoteBlank } from '../../interfaces/IQuote';
import {
    IQuoteCreateFormProps,
    IQuoteCreateFormState,
    IQuoteCreateFormDispatchProps
} from './quoteCreateForm.interface';
import { FormContainer, CloseForm, Box, Title, Label } from './qutesCreateForm.elements';

/**
 * TODO: add validation before creating
 */
export class QuoteCreateFormComponent extends Component<IQuoteCreateFormProps, IQuoteCreateFormState> {
    static defaultState: IQuoteCreateFormState = {text: '', author: ''};

    state = QuoteCreateFormComponent.defaultState;

    createQuote = () => {
        const {text, author} = this.state;

        this.props.create({text, author});
        this.setState(QuoteCreateFormComponent.defaultState);
    };

    onChangeAuthor = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({author: event.target.value});
    };

    onChangeText = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({text: event.target.value});
    };

    render(): React.ReactElement {
        return (
            <FormContainer>
                <Box>
                    <Title>Добавить цитату</Title>
                    <CloseForm onClick={this.props.onClose}>X</CloseForm>
                </Box>
                <Box>
                    <Label>Автор:</Label>
                    <UIInput value={this.state.author}
                             onChange={this.onChangeAuthor} />
                </Box>
                <Box>
                    <Label>Текст:</Label>
                    <UIInput as="textarea"
                             value={this.state.text}
                             onChange={this.onChangeText} />
                </Box>
                <Box>
                    <UIButton onClick={this.createQuote}>Создать</UIButton>
                </Box>
            </FormContainer>
        );
    }
}

function mapDispatchToProps(dispatch: Dispatch): IQuoteCreateFormDispatchProps {
    return {
        create: (quote: IQuoteBlank) => dispatch(createQuote(quote))
    }
}

export const QuoteCreateForm = connect(null, mapDispatchToProps)(QuoteCreateFormComponent);
