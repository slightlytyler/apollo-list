import { createActionType } from 'helpers/actionTypes';
import NAME from './NAME';

const actionType = createActionType(NAME);

export const PUSH = actionType('PUSH');

export const SHIFT = actionType('SHIFT');
