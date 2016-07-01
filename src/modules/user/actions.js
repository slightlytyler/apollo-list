import { createAsyncAction } from 'helpers/actions';
import * as actionTypes from './actionTypes';

const asyncAction = createAsyncAction(actionTypes);

export const fetchRecord = asyncAction('FETCH_RECORD', {
  default: () => ({ type: actionTypes.FETCH_RECORD.pending }),
});

export const login = asyncAction('LOGIN');

export const logout = asyncAction('LOGOUT', {
  default: () => ({ type: actionTypes.LOGOUT.pending }),
  success: () => ({ type: actionTypes.LOGOUT.success }),
});

export const signUp = asyncAction('SIGN_UP');
