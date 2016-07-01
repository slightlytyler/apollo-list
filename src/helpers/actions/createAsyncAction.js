import { curry } from 'lodash';

const createDefaultActions = actionTypesSet => ({
  default: arg => ({
    type: actionTypesSet.pending,
    payload: arg,
  }),
  success: payload => ({
    type: actionTypesSet.success,
    payload,
  }),
  failure: error => ({
    type: actionTypesSet.failure,
    payload: { error },
  }),
});

export default curry((actionTypes, key, customActions = {}) => {
  const defaultActions = createDefaultActions(actionTypes[key]);
  const actions = Object.assign({}, defaultActions, customActions);

  const action = actions.default;
  action.success = actions.success;
  action.failure = actions.failure;

  return action;
});
