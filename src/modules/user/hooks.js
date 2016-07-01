import client from 'api/client';
import { getId, getToken } from './selectors';
import { fetchRecord } from './actions';

export const registerToken = (dispatch, getState) => {
  const state = getState();
  const id = getId(state);

  if (id) {
    const token = getToken(state);
    if (token) client.registerToken(token);
    dispatch(fetchRecord());
  }
};
