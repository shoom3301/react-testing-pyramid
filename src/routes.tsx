import React from 'react';
import { Route, Switch } from 'react-router';
import { RouteX } from './components/route-x/route-x';
import { RouteY } from './components/route-y/route-y';

export const Routes = () => (
    <Switch>
        <Route exact path="/x" component={RouteX}/>
        <Route exact path="/y" component={RouteY}/>
    </Switch>
);