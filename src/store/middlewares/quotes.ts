import { call, put } from 'redux-saga/effects';
import { createQuote, loadQuote, loadQuotesList } from 'helpers/quotes/quotesHttp';
import {
    QuoteCreateAction,
    quoteCreateSuccess,
    quoteCreateError,
    QuoteCreateFailAction,
    QuotesActionTypes,
    QuoteFetchOneAction,
    quoteFetchOneError,
    QuoteFetchOneFailAction,
    quoteFetchOneSuccess,
    QuoteFetchAllFailAction, QuoteFetchAllAction, quoteFetchAllSuccess, quoteFetchAllError
} from '../actions/quotes';
import { takeLatest, takeEvery } from 'redux-saga/effects';

export function* quotesMiddleware() {
    yield takeLatest(QuotesActionTypes.CREATE, quoteCreation);
    yield takeEvery(QuotesActionTypes.CREATED_FAIL, quoteCreationFail);

    yield takeEvery(QuotesActionTypes.FETCH_ONE, quoteFetching);
    yield takeEvery(QuotesActionTypes.FETCH_ONE_FAIL, quoteFetchingFail);

    yield takeLatest(QuotesActionTypes.FETCH_ALL, quotesFetching);
    yield takeEvery(QuotesActionTypes.FETCH_ALL_FAIL, quotesFetchingFail);
}

export function* quoteCreation(action: QuoteCreateAction) {
    try {
        const newQuote = yield call(createQuote, action.payload);

        yield put(quoteCreateSuccess(newQuote));
    } catch (error) {
        yield put(quoteCreateError(error));
    }
}

export function quoteCreationFail(action: QuoteCreateFailAction) {
    console.error('Quote creation error: ', action.payload);
}

export function* quoteFetching(action: QuoteFetchOneAction) {
    try {
        const quote = yield call(loadQuote, action.payload);

        yield put(quoteFetchOneSuccess(quote));
    } catch (error) {
        yield put(quoteFetchOneError(error));
    }
}

export function quoteFetchingFail(action: QuoteFetchOneFailAction) {
    console.error('Quote fetching error: ', action.payload);
}

export function* quotesFetching(action: QuoteFetchAllAction) {
    try {
        const quote = yield call(loadQuotesList);

        yield put(quoteFetchAllSuccess(quote));
    } catch (error) {
        yield put(quoteFetchAllError(error));
    }
}

export function quotesFetchingFail(action: QuoteFetchAllFailAction) {
    console.error('Quotes fetching error: ', action.payload);
}
