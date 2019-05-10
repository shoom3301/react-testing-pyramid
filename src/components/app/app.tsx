import React, { Component, ReactNode } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { appSelector } from '../../store/selectors/app';
import logo from '../../assets/logo.svg';
import { ActionsLoadable } from '../actions/actions.loadable';
import { RouteX } from '../route-x/route-x';
import { RouteY } from '../route-y/route-y';
import { AppContainer, AppHeader, AppLogo, AppNavigation } from './app.elements';
import { IAppProps } from './app.interface';

export class AppComponent extends Component<IAppProps> {
    render(): ReactNode {
        return (
            <AppContainer>
                <AppHeader>
                    <AppLogo src={logo} alt="logo"/>
                    <p>
                        Count: {this.props.count}
                    </p>
                    <ActionsLoadable/>
                    <p>
                        {this.props.saving && 'Saving...'}
                    </p>
                    <AppNavigation>
                        <Link to="/">To Main</Link>
                        <Link to="/x/">To X</Link>
                        <Link to="/y/">To Y</Link>
                    </AppNavigation>
                </AppHeader>
                <Switch>
                    <Route exact path="/x" component={RouteX}/>
                    <Route exact path="/y" component={RouteY}/>
                </Switch>
            </AppContainer>
        );
    }
}

export const App = connect(
    appSelector
)(AppComponent);
