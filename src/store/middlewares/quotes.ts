import { call, put } from 'redux-saga/effects';
import { createQuoteOnServer } from '../../helpers/quotes/createQuoteOnServer';
import { fetchQuoteFromServer } from '../../helpers/quotes/fetchQuoteFromServer';
import {
    CreateQuoteAction,
    quoteCreateSuccess,
    quoteCreateError,
    QuoteCreateFailAction,
    QuotesActionTypes, QuoteFetchOneAction, quoteFetchError, QuoteFetchFailAction, quoteFetchSuccess
} from '../actions/quotes';
import { takeLatest, takeEvery } from 'redux-saga/effects';

export function* quotesMiddleware() {
    yield takeLatest(QuotesActionTypes.CREATE, quoteCreation);
    yield takeEvery(QuotesActionTypes.CREATED_FAIL, quoteCreationFail);
    yield takeEvery(QuotesActionTypes.FETCH_ONE, quoteFetching);
    yield takeEvery(QuotesActionTypes.FETCH_FAIL, quoteFetchingFail);
}

export function* quoteCreation(action: CreateQuoteAction) {
    try {
        const newQuote = yield call(createQuoteOnServer, action.payload);

        yield put(quoteCreateSuccess(newQuote));
    } catch (error) {
        yield put(quoteCreateError(error));
    }
}

export function quoteCreationFail(action: QuoteCreateFailAction) {
    console.error('Quote creation error: ', action.payload);
}

export function quoteFetchingFail(action: QuoteFetchFailAction) {
    console.error('Quote fetching error: ', action.payload);
}

export function* quoteFetching(action: QuoteFetchOneAction) {
    try {
        const quote = yield call(fetchQuoteFromServer, action.payload);

        yield put(quoteFetchSuccess(quote));
    } catch (error) {
        yield put(quoteFetchError(error));
    }
}