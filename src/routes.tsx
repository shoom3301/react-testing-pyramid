import React from 'react';
import { Route, Switch } from 'react-router';
import { QuotesPageLoadable } from './components/quotesPage/quotesPage.loadable';
import { RouteX } from './components/route-x/route-x';
import { RouteY } from './components/route-y/route-y';

export const Routes = (): JSX.Element => (
    <Switch>
        <Route exact path="/" component={QuotesPageLoadable}/>
        <Route exact path="/x" component={RouteX}/>
        <Route exact path="/y" component={RouteY}/>
    </Switch>
);