import React, { Component, ReactNode } from 'react';
import { connect } from 'react-redux';
import { appSelector } from '../../store/selectors/app';
import logo from '../../assets/logo.svg';
import { ActionsLoadable } from '../actions/actions.loadable';
import { AppContainer, AppHeader, AppLogo } from './app.elements';
import { IAppProps } from './app.interface';

export class AppComponent extends Component<IAppProps> {
  render(): ReactNode {
    return (
        <AppContainer>
          <AppHeader>
            <AppLogo src={logo} alt="logo" />
            <p>
              Count: {this.props.count}
            </p>
            <ActionsLoadable/>
            <p>
              {this.props.saving && 'Saving...'}
            </p>
          </AppHeader>
        </AppContainer>
    );
  }
}

export const App = connect(
    appSelector
)(AppComponent);
