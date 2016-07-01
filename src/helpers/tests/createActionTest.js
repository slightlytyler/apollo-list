import { curry } from 'lodash';
import { constantCase } from 'helpers/string';

export default curry((actions, actionTypes, key) => {
  describe(key, () => {
    it(`returns a ${key} action`, () => {
      const action = actions[key]();
      const actionType = actionTypes[constantCase(key)];

      action.should.have.property('type', actionType);
    });
  });
});
