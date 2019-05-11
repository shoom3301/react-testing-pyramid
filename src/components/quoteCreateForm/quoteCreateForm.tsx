import React, { Component } from 'react';
import { connect } from 'react-redux';
import { UIButton } from 'ui-elements/button';
import { UIInput } from 'ui-elements/input';
import { IQuoteCreateFormProps } from './quoteCreateForm.interface';
import { FormContainer, CloseForm, Box, Title, Label } from './qutesCreateForm.elements';

export class QuoteCreateFormComponent extends Component<IQuoteCreateFormProps> {
    render(): React.ReactElement {
        return (
            <FormContainer>
                <Box>
                    <Title>Добавить цитату</Title>
                    <CloseForm onClick={this.props.onClose}>X</CloseForm>
                </Box>
                <Box>
                    <Label>Автор:</Label>
                    <UIInput />
                </Box>
                <Box>
                    <Label>Текст:</Label>
                    <UIInput as="textarea" />
                </Box>
                <Box>
                    <UIButton>Создать</UIButton>
                </Box>
            </FormContainer>
        );
    }
}

export const QuoteCreateForm = connect()(QuoteCreateFormComponent);
