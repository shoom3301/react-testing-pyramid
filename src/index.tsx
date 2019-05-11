import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import { Routes } from './routes';
import { store } from './store';
import { Provider } from 'react-redux';
import { history } from 'router';
import './index.css';

const rootElement = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Routes />
        </ConnectedRouter>
    </Provider>,
    rootElement
);