import generateId from 'shortid';
import { createAction } from 'helpers/actions';
import * as actionTypes from './actionTypes';

const action = createAction(actionTypes);

export const push = action('PUSH', notification => ({
  ...notification,
  uid: generateId(),
}));

export const shift = action('SHIFT', uid => ({ uid }));
