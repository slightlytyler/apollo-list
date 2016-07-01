import { curry } from 'lodash';
import { constantCase } from 'helpers/string';

const createDefaultTests = (actions, actionTypes, key) => ({
  default: () => {
    it('returns a pending action by default', () => {
      const arg = {};
      const action = actions[key];
      const actionType = actionTypes[constantCase(key)];

      action(arg).should.deep.equal({
        type: actionType.pending,
        payload: arg,
      });
    });
  },
  success: () => it('returns a success action at success', () => {
    const payload = {};
    const action = actions[key].success;
    const actionType = actionTypes[constantCase(key)];
    action(payload).should.deep.equal({
      type: actionType.success,
      payload,
    });
  }),
  failure: () => it('returns a failure action at failure', () => {
    const error = new Error();
    const action = actions[key].failure;
    const actionType = actionTypes[constantCase(key)];

    action(error).should.deep.equal({
      type: actionType.failure,
      payload: { error },
    });
  }),
});

export default curry((actions, actionTypes, key, customTests = {}) => {
  const defaultTests = createDefaultTests(actions, actionTypes, key);
  const tests = Object.assign({}, defaultTests, customTests);

  return describe(key, () => {
    tests.default();
    tests.success();
    tests.failure();
  });
});
