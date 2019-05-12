import React from 'react';
import { Route, Switch } from 'react-router';
import { QuotePageLoadable } from '../components/containers/quotePage/quotePage.loadable';
import { QuotesPageLoadable } from '../components/containers/quotesPage/quotesPage.loadable';
import { mainRoute, quotePageRoute } from './routerPaths';

export const Routes = (): JSX.Element => (
    <Switch>
        <Route exact path={mainRoute} component={QuotesPageLoadable}/>
        <Route exact path={quotePageRoute()} component={QuotePageLoadable}/>
    </Switch>
);