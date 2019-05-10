import { createSelector } from 'reselect';
import { countSelector, savingSelector } from './counter';

export const appSelector = createSelector(
    countSelector,
    savingSelector,
    (count, saving) => ({count, saving})
);