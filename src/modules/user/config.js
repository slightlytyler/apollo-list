import { map } from 'lodash';
import * as actionTypes from './actionTypes';

export default {
  shape: {},
  persist: true,
  persistTriggers: map(actionTypes, type => type.success),
};
