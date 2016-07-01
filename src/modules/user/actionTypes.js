import { createAsyncActionTypes } from 'helpers/actionTypes';
import NAME from './NAME';

const asyncActionTypes = createAsyncActionTypes(NAME);

export const FETCH_RECORD = asyncActionTypes('FETCH_RECORD');

export const LOGIN = asyncActionTypes('LOGIN');

export const LOGOUT = asyncActionTypes('LOGOUT');

export const SIGN_UP = asyncActionTypes('SIGN_UP');
