import { RouterState } from 'connected-react-router';
import { IState } from '../store/states';
import { quotesMock } from './mocks/qoutes.mock';

export function generateState(pathname = '', quotes = quotesMock): IState {
    return {
        router: generateRouterState(pathname),
        quotes
    };
}

export function generateRouterState(pathname = ''): RouterState {
    return {
        action: 'PUSH',
        location: {
            pathname,
            state: '',
            search: '',
            hash: '',
        }
    };
}