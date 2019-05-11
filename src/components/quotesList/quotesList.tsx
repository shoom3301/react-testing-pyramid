import React, { Component } from 'react';
import { connect } from 'react-redux';

export class QuotesListComponent extends Component<void> {
    render(): React.ReactElement {
        return (
            <div>Quotes List</div>
        );
    }
}

export const QuotesList = connect()(QuotesListComponent);
