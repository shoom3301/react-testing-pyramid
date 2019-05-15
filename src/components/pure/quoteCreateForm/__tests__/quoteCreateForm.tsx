import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { initEnzyme } from 'test-utils/initEnzyme';
import { QuoteCreateForm } from '../quoteCreateForm';
import { QuoteCreateFormPo } from 'test-utils/pageObjects/quoteCreateForm.po';

describe('QuoteCreateForm - quote create form component', () => {
    let onClose: jest.Mock;
    let onSubmit: jest.Mock;
    let wrapper: ShallowWrapper;
    let pageObject: QuoteCreateFormPo;

    beforeAll(() => {
        initEnzyme();
    });

    beforeEach(() => {
        onClose = jest.fn();
        onSubmit = jest.fn();
        wrapper = shallow(<QuoteCreateForm onClose={onClose} onSubmit={onSubmit}/>);
        pageObject = new QuoteCreateFormPo(wrapper);
    });

    describe('Form validation', () => {
        it('Text of error validation is not displayed by default', () => {
            expect(pageObject.getErrorBoxes().length).toBe(0);
        });

        describe('Validation error is displayed, when:', () => {
            it('Author name length less than 2 characters', () => {
                pageObject.changeAuthor('1');

                expect(pageObject.getErrorBoxes().length).toBe(1);
            });

            it('Text less than 2 characters', () => {
                pageObject.changeText('2');

                expect(pageObject.getErrorBoxes().length).toBe(1);
            });

            it('Author name length greater than 64 characters', () => {
                pageObject.changeAuthor('g'.repeat(65));

                expect(pageObject.getErrorBoxes().length).toBe(1);
            });

            it('Text length greater than 256 characters', () => {
                pageObject.changeText('l'.repeat(257));

                expect(pageObject.getErrorBoxes().length).toBe(1);
            });

            it('Author is not filled', () => {
                pageObject.changeText(pageObject.validText);
                pageObject.changeAuthor('');

                expect(pageObject.getErrorBoxes().length).toBe(1);
            });

            it('Text is not filled', () => {
                pageObject.changeAuthor(pageObject.validText);
                pageObject.changeText('');

                expect(pageObject.getErrorBoxes().length).toBe(1);
            });
        });

        describe('Validation error is not displayed, when', () => {
            beforeEach(() => {
                pageObject.changeAuthor('a');
                pageObject.changeText('');
            });

            it('Length of author name > 2 & < 64 and length of text > 2 & < 256', () => {
                expect(pageObject.getErrorBoxes().length).toBe(1);

                pageObject.changeAuthor(pageObject.validAuthor);
                pageObject.changeText(pageObject.validText);

                expect(pageObject.getErrorBoxes().length).toBe(0);
            });
        });

        describe('Form submitting', () => {
            describe('When form is valid', () => {
                it('The entered data is sent', () => {
                    pageObject.fillAndSubmitForm();

                    expect(onSubmit.mock.calls.length).toBe(1);
                });

                it('Fields of form cleans', () => {
                    pageObject.fillAndSubmitForm();

                    expect(pageObject.getAuthorInput().props().value).toBe('');
                    expect(pageObject.getTextInput().props().value).toBe('');
                });
            });

            describe('When form is not valid', () => {
                it('The entered data is not sent', () => {
                    pageObject.changeAuthor('a');
                    pageObject.changeText('b');
                    pageObject.submitForm();

                    expect(onSubmit.mock.calls.length).toBe(0);
                });
            });
        });
    });
});