import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './components/app/App';
import { store } from './store';
import { Provider } from 'react-redux';

const rootElement = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);