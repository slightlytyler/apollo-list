import { createSelector } from 'reselect';
import NAME from './NAME';

export const getSubstate = state => state[NAME];

export const isLoaded = createSelector(
  getSubstate,
  substate => substate.loaded
);
