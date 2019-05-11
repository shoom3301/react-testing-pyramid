import React, { Component, ChangeEvent } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { UIButton } from 'ui-elements/button';
import { UIInput } from 'ui-elements/input';
import { createQuote } from 'store/actions/quotes';
import { authorIsValid, textIsValid } from '../../helpers/quotes/quoteValidation';
import { IQuoteBlank } from '../../interfaces/IQuote';
import {
    IQuoteCreateFormProps,
    IQuoteCreateFormState,
    IQuoteCreateFormDispatchProps
} from './quoteCreateForm.interface';
import { FormContainer, CloseForm, Box, Title, Label } from './qutesCreateForm.elements';

export class QuoteCreateFormComponent extends Component<IQuoteCreateFormProps, IQuoteCreateFormState> {
    static defaultState: IQuoteCreateFormState = {text: '', author: '', isValid: null};

    state = QuoteCreateFormComponent.defaultState;

    createQuote = () => {
        if (this.state.isValid !== true) {
            return;
        }

        const {text, author} = this.state;

        this.props.create({text, author});
        this.setState(QuoteCreateFormComponent.defaultState);
    };

    onChangeAuthor = (event: ChangeEvent<HTMLInputElement>) => {
        this.updateForm({author: event.target.value});
    };

    onChangeText = (event: ChangeEvent<HTMLInputElement>) => {
        this.updateForm({text: event.target.value});
    };

    private updateForm(updateState: Partial<IQuoteCreateFormState>) {
        this.setState({...this.state, ...updateState}, () => this.validate());
    }

    private validate() {
        const {author, text} = this.state;
        const isValid = authorIsValid(author) && textIsValid(text);

        this.setState({isValid});
    }

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
                             onChange={this.onChangeAuthor}/>
                </Box>
                <Box>
                    <Label>Текст:</Label>
                    <UIInput as="textarea"
                             value={this.state.text}
                             onChange={this.onChangeText}/>
                </Box>
                {this.state.isValid === false
                && <Box error>
                    <p>
                        {`
                        Обязательно заполните текст и автора цитаты.<br />
                        Длина текста >=2 && <=256, длина автора >=2 && <=64
                        `}
                    </p>
                </Box>
                }
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
