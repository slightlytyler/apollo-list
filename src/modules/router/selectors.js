import { createSelector } from 'reselect';
import NAME from './NAME';

export const getSubstate = state => state[NAME].locationBeforeTransitions;

export const getQuery = createSelector(
  getSubstate,
  substate => substate.query
);

export const getPathname = createSelector(
  getSubstate,
  substate => substate.pathname
);
