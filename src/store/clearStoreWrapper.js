import { pick } from 'lodash';
import { getModuleNamesByConfig } from 'helpers/modules';
import { CLEAR_STORE } from './actionTypes';
import * as modules from 'modules';

const staticModuleNames = getModuleNamesByConfig(modules, 'static');
const staticKeys = ['optimist', ...staticModuleNames];

export default reducer => (state, action) => {
  switch (action.type) {
    case CLEAR_STORE:
      return reducer(pick(state, staticKeys), action);

    default:
      return reducer(state, action);
  }
};
