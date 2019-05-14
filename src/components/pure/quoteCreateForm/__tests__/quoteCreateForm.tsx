import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { initEnzyme } from 'test-utils/initEnzyme';
import { QuoteCreateForm } from '../quoteCreateForm';
import { QuoteCreateFormPo } from 'test-utils/pageObjects/quoteCreateForm.po';

describe('QuoteCreateForm - форма создания цитаты', () => {
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

    describe('Валидация формы', () => {
        it('По-умолчанию текст ошибки валидации не отображается', () => {
            expect(pageObject.getErrorBoxes().length).toBe(0);
        });

        describe('Ошибка валидации отображается если:', () => {
            it('Длинна имени автора менее 2 символов', () => {
                pageObject.changeAuthor('1');

                expect(pageObject.getErrorBoxes().length).toBe(1);
            });

            it('Длинна текста менее 2 символов', () => {
                pageObject.changeText('2');

                expect(pageObject.getErrorBoxes().length).toBe(1);
            });

            it('Длинна имени автора более 64 символов', () => {
                pageObject.changeAuthor('g'.repeat(65));

                expect(pageObject.getErrorBoxes().length).toBe(1);
            });

            it('Длинна текста более 256 символов', () => {
                pageObject.changeText('l'.repeat(257));

                expect(pageObject.getErrorBoxes().length).toBe(1);
            });

            it('Автор незаполнен', () => {
                pageObject.changeText(pageObject.validText);
                pageObject.changeAuthor('');

                expect(pageObject.getErrorBoxes().length).toBe(1);
            });

            it('Текст незаполнен', () => {
                pageObject.changeAuthor(pageObject.validText);
                pageObject.changeText('');

                expect(pageObject.getErrorBoxes().length).toBe(1);
            });
        });

        describe('Ошибка валидации скрывается если', () => {
            beforeEach(() => {
                pageObject.changeAuthor('a');
                pageObject.changeText('');
            });

            it('Длинна имени автора > 2 & < 64 и длинна текст > 2 & < 256', () => {
                expect(pageObject.getErrorBoxes().length).toBe(1);

                pageObject.changeAuthor(pageObject.validAuthor);
                pageObject.changeText(pageObject.validText);

                expect(pageObject.getErrorBoxes().length).toBe(0);
            });
        });

        describe('Отправка формы', () => {
            describe('Если форма валидна', () => {
                it('Отправляются введенные данные', () => {
                    pageObject.fillAndSubmitForm();

                    expect(onSubmit.mock.calls.length).toBe(1);
                });

                it('Поля формы очищаются', () => {
                    pageObject.fillAndSubmitForm();

                    expect(pageObject.getAuthorInput().props().value).toBe('');
                    expect(pageObject.getTextInput().props().value).toBe('');
                });
            });

            describe('Если форма невалидна', () => {
                it('Введенные данные не отправляются', () => {
                    pageObject.changeAuthor('a');
                    pageObject.changeText('b');
                    pageObject.submitForm();

                    expect(onSubmit.mock.calls.length).toBe(0);
                });
            });
        });
    });
});