import { Action } from 'redux';
import { runSaga, Saga } from 'redux-saga';

export function recordSaga(saga: Saga<any>, initialAction: Action): Promise<any[]> {
    const dispatched: any[] = [];
    const options = {
        dispatch: (action: any) => dispatched.push(action),
        getState: () => ({}),
    };

    return runSaga(
        options,
        saga,
        initialAction
    )
        .toPromise()
        .then(() => dispatched);
}