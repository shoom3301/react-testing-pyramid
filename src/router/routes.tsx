import React from 'react';
import { Route, Switch } from 'react-router';
import { QuotePageLoadable } from '../components/quotePage/quotePage.loadable';
import { QuotesPageLoadable } from '../components/quotesPage/quotesPage.loadable';
import { mainRoute, quotePageRoute, quoteIdParam } from './routerPaths';

export const Routes = (): JSX.Element => (
    <Switch>
        <Route exact path={mainRoute} component={QuotesPageLoadable}/>
        <Route exact path={quotePageRoute(`:${quoteIdParam}`)} component={QuotePageLoadable}/>
    </Switch>
);