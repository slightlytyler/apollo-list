import { createActionType } from 'helpers/actionTypes';
import NAME from './NAME';

const actionTypeFactory = createActionType(NAME);

export const LOGIN = actionTypeFactory('LOGIN');

export const LOGOUT = actionTypeFactory('LOGOUT');

export const SIGN_UP = actionTypeFactory('SIGN_UP');
