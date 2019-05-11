import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import { Routes } from './router/routes';
import { store } from './store';
import { Provider } from 'react-redux';
import { history } from 'router/router';
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