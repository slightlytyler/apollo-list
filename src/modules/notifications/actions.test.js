import * as actionTypes from './actionTypes';
import * as actions from './actions';
import { createActionTest } from 'helpers/tests';

const actionTest = createActionTest(actions, actionTypes);

describe('notifications actions', () => {
  actionTest('push');
  actionTest('shift');
});
