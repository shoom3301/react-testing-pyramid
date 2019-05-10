import { createSelector } from 'reselect';
import { countSelector } from './counter';

// TODO: set generic types for createSelector
export const actionsSelector = createSelector(countSelector, count => ({count}));