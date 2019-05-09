import React, { Component, ReactNode } from 'react';
import { connect } from 'react-redux';
import { IState } from '../../store/state';
import { Dispatch } from 'redux';
import logo from '../../assets/logo.svg';
import { counterIncrement, counterDecrement, counterSave } from '../../store/actions/counter';
import './App.css';

export interface IAppProps {
  count?: number;
  saving?: boolean;
  increment?: () => void;
  decrement?: () => void;
  save?: (count: number) => void;
}

export class AppComponent extends Component<IAppProps> {
  saveCount = () => {
    if (!this.props.save || typeof this.props.count !== 'number') {
      return;
    }

    this.props.save(this.props.count);
  };

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
              <button onClick={this.saveCount}>Save</button>
            </p>
            <p>
              {this.props.saving && 'Saving...'}
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
    count: state.count,
    saving: state.saving
  }
}

function mapDispatchToProps(dispatch: Dispatch): IAppProps {
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
