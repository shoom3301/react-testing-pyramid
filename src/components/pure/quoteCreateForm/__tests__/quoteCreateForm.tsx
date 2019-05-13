import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { initEnzyme } from '../../../../test-utils/initEnzyme';
import { UIButton } from '../../../../ui-elements/button';
import { QuoteCreateForm } from '../quoteCreateForm';
import { Box } from '../qutesCreateForm.elements';

describe('QuoteCreateForm - форма создания цитаты', () => {
    const validAuthor = 'Jhon';
    const validText = 'Simona';

    let onClose: jest.Mock;
    let onSubmit: jest.Mock;
    let wrapper: ShallowWrapper;

    function getErrorBoxes(): ShallowWrapper {
        return wrapper.find(Box).find({error: true});
    }

    function getAuthorInput(): ShallowWrapper<any> {
        return wrapper.find('[name="author"]').first();
    }

    function changeAuthor(author: string) {
        getAuthorInput().simulate('change', {target: {value: author}});
    }

    function getTextInput(): ShallowWrapper<any> {
        return wrapper.find('[name="text"]').first();
    }

    function changeText(author: string) {
        getTextInput().simulate('change', {target: {value: author}});
    }

    function getSubmitButton(): ShallowWrapper {
        return wrapper.find(UIButton).first();
    }

    function submitForm() {
        getSubmitButton().simulate('click');
    }

    function fillAndSubmitForm() {
        changeAuthor(validAuthor);
        changeText(validText);
        submitForm();
    }

    beforeAll(() => {
        initEnzyme();
    });

    beforeEach(() => {
        onClose = jest.fn();
        onSubmit = jest.fn();
        wrapper = shallow(<QuoteCreateForm onClose={onClose} onSubmit={onSubmit}/>);
    });

    describe('Валидация формы', () => {
        it('По-умолчанию текст ошибки валидации не отображается', () => {
            expect(getErrorBoxes().length).toBe(0);
        });

        describe('Ошибка валидации отображается если:', () => {
            it('Длинна имени автора менее 2 символов', () => {
                changeAuthor('1');

                expect(getErrorBoxes().length).toBe(1);
            });

            it('Длинна текста менее 2 символов', () => {
                changeText('2');

                expect(getErrorBoxes().length).toBe(1);
            });

            it('Длинна имени автора более 64 символов', () => {
                changeAuthor('g'.repeat(65));

                expect(getErrorBoxes().length).toBe(1);
            });

            it('Длинна текста более 256 символов', () => {
                changeText('l'.repeat(257));

                expect(getErrorBoxes().length).toBe(1);
            });

            it('Автор незаполнен', () => {
                changeText(validText);
                changeAuthor('');

                expect(getErrorBoxes().length).toBe(1);
            });

            it('Текст незаполнен', () => {
                changeAuthor(validText);
                changeText('');

                expect(getErrorBoxes().length).toBe(1);
            });
        });

        describe('Ошибка валидации скрывается если', () => {
            beforeEach(() => {
                changeAuthor('a');
                changeText('');
            });

            it('Длинна имени автора > 2 & < 64 и длинна текст > 2 & < 256', () => {
                expect(getErrorBoxes().length).toBe(1);

                changeAuthor(validAuthor);
                changeText(validText);

                expect(getErrorBoxes().length).toBe(0);
            });
        });

        describe('Отправка формы', () => {
            describe('Если форма валидна', () => {
                it('Отправляются введенные данные', () => {
                    fillAndSubmitForm();

                    expect(onSubmit.mock.calls.length).toBe(1);
                });

                it('Поля формы очищаются', () => {
                    fillAndSubmitForm();

                    expect(getAuthorInput().props().value).toBe('');
                    expect(getTextInput().props().value).toBe('');
                });
            });

            describe('Если форма невалидна', () => {
                it('Введенные данные не отправляются', () => {
                    changeAuthor('a');
                    changeText('b');
                    submitForm();

                    expect(onSubmit.mock.calls.length).toBe(0);
                });
            });
        });
    });
});