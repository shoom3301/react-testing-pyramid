import React, { Component, ReactNode } from 'react';
import { connect } from 'react-redux';
import { IState } from '../../store/state';
import { Dispatch } from 'redux';
import logo from '../../assets/logo.svg';
import { counterIncrement, counterDecrement } from '../../store/actions/counter';
import './App.css';

export interface IAppProps {
  count?: number;
  increment?: () => void;
  decrement?: () => void;
}

export class AppComponent extends Component<IAppProps> {
  render(): ReactNode {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Count: {this.props.count}
            </p>
            <p>
              <button onClick={this.props.increment}>Inc</button>
              <button onClick={this.props.decrement}>Dec</button>
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
    );
  }
}

function mapStateToProps(state: IState): IAppProps {
  return {
    count: state.count
  }
}

function mapDispatchToProps(dispatch: Dispatch): IAppProps {
  return {
    increment: () => dispatch(counterIncrement()),
    decrement: () => dispatch(counterDecrement())
  }
}

export const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(AppComponent);
