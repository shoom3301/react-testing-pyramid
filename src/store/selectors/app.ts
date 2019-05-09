import { createSelector } from 'reselect';
import { countSelector } from './count';
import { savingSelector } from './saving';

export const appSelector = createSelector(
    countSelector,
    savingSelector,
    (count, saving) => ({count, saving})
);