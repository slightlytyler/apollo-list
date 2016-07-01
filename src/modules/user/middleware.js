import client from 'api/client';
import { LOGIN, LOGOUT, SIGN_UP } from './actionTypes';
import { CLEAR_STORE } from 'store/actionTypes';
import { actions as routerActions } from 'modules/router';

export const handleAuth = store => next => action => {
  const result = next(action);
  const { type } = action;
  const { dispatch } = store;

  if (type === LOGIN.success || type === SIGN_UP.success) {
    client.registerToken(action.payload.token);
    dispatch(routerActions.pushRoute('/'));
  } else if (type === LOGOUT.success) {
    client.unregisterToken();
    dispatch(routerActions.pushRoute('/login'));
    dispatch({ type: CLEAR_STORE });
  }

  return result;
};
