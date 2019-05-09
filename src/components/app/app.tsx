import React, { Component, ReactNode } from 'react';
import { connect } from 'react-redux';
import { appReselector } from '../../store/selectors/app';
import { IState } from '../../store/state';
import { Dispatch } from 'redux';
import logo from '../../assets/logo.svg';
import { counterIncrement, counterDecrement, counterSave } from '../../store/actions/counter';
import { AppContainer, AppHeader, AppLogo } from './app.elements';
import { IAppProps, IAppStateProps, IAppDispatchProps } from './app.interface';

export class AppComponent extends Component<IAppProps> {
  saveCount = () => {
    if (!this.props.save || typeof this.props.count !== 'number') {
      return;
    }

    this.props.save(this.props.count);
  };

  render(): ReactNode {
    return (
        <AppContainer>
          <AppHeader>
            <AppLogo src={logo} alt="logo" />
            <p>
              Count: {this.props.count}
            </p>
            <p>
              <button onClick={this.props.increment}>Inc</button>
              <button onClick={this.props.decrement}>Dec</button>
              <button onClick={this.saveCount}>Save</button>
            </p>
            <p>
              {this.props.saving && 'Saving...'}
            </p>
          </AppHeader>
        </AppContainer>
    );
  }
}

function mapStateToProps(state: IState): IAppStateProps {
  return appReselector(state);
}

function mapDispatchToProps(dispatch: Dispatch): IAppDispatchProps {
  return {
    increment: () => dispatch(counterIncrement()),
    decrement: () => dispatch(counterDecrement()),
    save: (count: number) => dispatch(counterSave(count)),
  }
}

export const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(AppComponent);
