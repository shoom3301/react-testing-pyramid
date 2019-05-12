import React from 'react';
import { ReactTestRenderer, ReactTestInstance, create } from 'react-test-renderer';
import { IQuoteBlank } from 'interfaces/IQuote';
import { QuoteCreateForm } from '../quoteCreateForm';

describe('QuoteCreateForm - форма создания цитаты', () => {
    const onClose = () => {};
    const onSubmit = (quote: IQuoteBlank) => {};

    let container: ReactTestRenderer;
    let instance: ReactTestInstance;

    beforeEach(() => {
        container = create(<QuoteCreateForm onClose={onClose} onSubmit={onSubmit}/>);
        instance = container.root;

    });

    afterEach(() => {
        container.unmount();
    });

    it('Snapshot of component is match', () => {
        expect(container.toJSON()).toMatchSnapshot();
    });

    // TODO: validation tests, form submit

    // describe('Валидация формы', () => {
    //     it('По-умолчанию текст ошибки валидации не отображается', async () => {
    //     });
    //
    //     describe('Ошибка валидации отображается если:', () => {
    //         it('Длинна имени автора менее 2 символов', async () => {
    //         });
    //
    //         it('Длинна текста менее 2 символов', async () => {
    //         });
    //
    //         it('Длинна имени автора более 64 символов', async () => {
    //         });
    //
    //         it('Длинна текста более 256 символов', async () => {
    //         });
    //
    //         it('Автор незаполнен', async () => {
    //         });
    //
    //         it('Текст незаполнен', async () => {
    //         });
    //     });
    //
    //     describe('Ошибка валидации скрывается если', () => {
    //         it('Длинна имени автора > 2 & < 64 и длинна текст > 2 & < 256', async () => {
    //         });
    //     });
    //
    //     describe('Отправка формы', () => {
    //         describe('Если форма валидна', () => {
    //             it('Отправляются введенные данные', async () => {
    //             });
    //
    //             it('Поля формы очищаются', async () => {
    //             });
    //         });
    //
    //         describe('Если форма невалидна', () => {
    //             it('Введенные данные не отправляются', async () => {
    //             });
    //         });
    //     });
    // });
});