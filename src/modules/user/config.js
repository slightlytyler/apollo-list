import * as actionTypes from './actionTypes';

export default {
  shape: {},
  persist: true,
  persistTriggers: Object.values(actionTypes),
};
