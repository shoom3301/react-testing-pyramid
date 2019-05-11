import React from 'react';
import Loadable from 'react-loadable';

export const QuotesPageLoadable = Loadable({
    loader() {
        return import('components/quotesPage/quotesPage');
    },
    render({QuotesPage}, props) {
        return <QuotesPage {...props}/>;
    },
    loading() {
        return null;
    }
});