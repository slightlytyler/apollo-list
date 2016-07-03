import { registerToken, clearToken } from 'api/client';
import { pushRoute } from 'modules/router/actions';
import * as actionTypes from './actionTypes';

export const login = user => dispatch => {
  registerToken(user.token);
  dispatch({
    type: actionTypes.LOGIN,
    payload: user,
  });
  dispatch(pushRoute('/'));
};

export const logout = () => dispatch => {
  clearToken();
  dispatch({ type: actionTypes.LOGOUT });
  dispatch(pushRoute('/login'));
};
