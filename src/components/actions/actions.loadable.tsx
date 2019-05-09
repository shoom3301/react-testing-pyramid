import React from 'react';
import Loadable from 'react-loadable';

export const ActionsLoadable = Loadable({
    loader() {
        return import('components/actions/actions');
    },
    render({Actions}, props) {
        return <Actions {...props}/>;
    },
    loading() {
        return <div>Actions loading...</div>;
    }
});