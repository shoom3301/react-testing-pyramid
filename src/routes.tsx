import React from 'react';
import { Route, Switch } from 'react-router';
import { QuotePageLoadable } from './components/quotePage/quotePage.loadable';
import { QuotesPageLoadable } from './components/quotesPage/quotesPage.loadable';

export const mainRoute = '/';
export const quotePageRoute = (quoteId: string): string => `/quote/${quoteId}`;

export const Routes = (): JSX.Element => (
    <Switch>
        <Route exact path={mainRoute} component={QuotesPageLoadable}/>
        <Route exact path={quotePageRoute(':quoteId')} component={QuotePageLoadable}/>
    </Switch>
);