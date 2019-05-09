import React, { Component, ReactNode } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { counterIncrement, counterDecrement, counterSave } from '../../store/actions/counter';
import { actionsSelector } from '../../store/selectors/actions';
import { IActionsProps } from './actions.interface';

export class ActionsComponent extends Component<IActionsProps> {
    saveCount = () => {
        if (!this.props.save || typeof this.props.count !== 'number') {
            return;
        }

        this.props.save(this.props.count);
    };

    render(): ReactNode {
        return (
            <p>
                <button onClick={this.props.increment}>Inc</button>
                <button onClick={this.props.decrement}>Dec</button>
                <button onClick={this.saveCount}>Save</button>
            </p>
        );
    }
}

function mapDispatchToProps(dispatch: Dispatch): IActionsProps {
    return {
        increment: () => dispatch(counterIncrement()),
        decrement: () => dispatch(counterDecrement()),
        save: (count: number) => dispatch(counterSave(count)),
    }
}

export const Actions = connect(
    actionsSelector,
    mapDispatchToProps
)(ActionsComponent);
