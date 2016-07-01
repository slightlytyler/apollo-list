import { combineReducers } from 'redux';
import optimist from 'redux-optimist-prime';
import { reduce } from 'lodash';
import * as modules from 'modules';

const moduleReducers = reduce(
  modules,
  (result, m) => Object.assign(result, { [m.NAME]: m.reducer }),
  {}
);

export default optimist(
  combineReducers(moduleReducers),
  action => (action.meta ? action.meta.optimistic : false)
);
