import React, { Component } from 'react';
import { connect } from 'react-redux';

export class QuoteCreateFormComponent extends Component<void> {
    render(): React.ReactElement {
        return (
            <div>Quote create form</div>
        );
    }
}

export const QuoteCreateForm = connect()(QuoteCreateFormComponent);
