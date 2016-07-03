import { registerToken } from 'api/client';
import { getId, getToken } from './selectors';

export const loadToken = (dispatch, getState) => {
  const state = getState();
  const id = getId(state);

  if (id) {
    const token = getToken(state);
    if (token) registerToken(token);
  }
};
