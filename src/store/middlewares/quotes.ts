import { call, put } from 'redux-saga/effects';
import { createQuoteOnServer } from '../../helpers/quotes/createQuoteOnServer';
import {
    CreateQuoteAction,
    quoteCreatedSuccess,
    quoteCreatedError,
    QuoteCreateFailAction,
    QuotesActionTypes
} from '../actions/quotes';
import { takeLatest, takeEvery } from 'redux-saga/effects';

export function* quotesMiddleware() {
    yield takeLatest(QuotesActionTypes.CREATE, quoteCreation);
    yield takeEvery(QuotesActionTypes.CREATED_FAIL, quoteCreationFail);
}

export function* quoteCreation(action: CreateQuoteAction) {
    try {
        const newQuote = yield call(createQuoteOnServer, action.payload);

        yield put(quoteCreatedSuccess(newQuote));
    } catch (error) {
        yield put(quoteCreatedError(error));
    }
}

export function quoteCreationFail(action: QuoteCreateFailAction) {
    console.error('Quote creation error: ', action.payload);
}
