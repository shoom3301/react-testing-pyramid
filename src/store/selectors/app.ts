import { IAppStateProps } from 'components/app/app.interface';
import { createSelector } from 'reselect';
import { IState } from '../state';

export function appSelector(state: IState): IAppStateProps {
    return {
        count: state.count,
        saving: state.saving
    };
}

/**
 * Just for test reselect
 */
export const appReselector = createSelector(appSelector, app => app);