import { createSelector } from 'reselect';
import NAME from './NAME';

export const getSubstate = state => state[NAME];

export const getId = createSelector(
  getSubstate,
  user => user.id
);

export const getToken = createSelector(
  getSubstate,
  user => user.token
);

export const getEmail = createSelector(
  getSubstate,
  user => user.email
);

export const getName = createSelector(
  getSubstate,
  getEmail,
  (user, email) => user.name || email
);

export const isAuthenticated = createSelector(
  getToken,
  token => !!token
);
