import { pushRoute } from 'modules/router/actions';
import * as actionTypes from './actionTypes';

const createAuthAction = actionType => user => dispatch => {
  dispatch({
    type: actionType,
    payload: user,
  });
  dispatch(pushRoute('/'));
};

export const login = createAuthAction(actionTypes.LOGIN);

export const logout = () => dispatch => {
  dispatch({ type: actionTypes.LOGOUT });
  dispatch(pushRoute('/login'));
};

export const signUp = createAuthAction(actionTypes.SIGN_UP);
