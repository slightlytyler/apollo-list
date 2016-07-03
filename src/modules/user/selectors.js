import { createSelector } from 'reselect';
import NAME from './NAME';

export const getSubstate = state => state[NAME];

export const getId = createSelector(
  getSubstate,
  user => user.id
);

export const getSessionId = createSelector(
  getSubstate,
  user => user.sessionId
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
  getSessionId,
  sessionId => !!sessionId
);
