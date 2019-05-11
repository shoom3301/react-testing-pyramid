import React from 'react';
import Loadable from 'react-loadable';

export const QuotePageLoadable = Loadable({
    loader() {
        return import('components/quotePage/quotePage');
    },
    render({QuotePage}, props) {
        return <QuotePage {...props}/>;
    },
    loading() {
        return null;
    }
});