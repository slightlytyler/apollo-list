import * as actionTypes from './actionTypes';
import * as actions from './actions';
import { createAsyncActionTest } from 'helpers/tests';

const asyncActionTest = createAsyncActionTest(actions, actionTypes);

describe('user actions', () => {
  asyncActionTest('fetchRecord', {
    default: () => it('returns a pending action by default', () => {
      const action = actions.fetchRecord;
      const actionType = actionTypes.FETCH_RECORD;

      action().should.deep.equal({ type: actionType.pending });
    }),
  });

  asyncActionTest('login');

  asyncActionTest('logout', {
    default: () => it('returns a pending action by default', () => {
      const action = actions.logout;
      const actionType = actionTypes.LOGOUT;

      action().should.deep.equal({ type: actionType.pending });
    }),
    success: () => it('returns a success action at success', () => {
      const action = actions.logout.success;
      const actionType = actionTypes.LOGOUT;

      action().should.deep.equal({ type: actionType.success });
    }),
  });

  asyncActionTest('signUp');
});
