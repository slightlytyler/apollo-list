import { combineReducers } from 'redux';
import * as actionTypes from './actionTypes';

const loaded = (state = false, { type }) => {
  switch (type) {
    case actionTypes.LOAD_COMPLETE:
      return true;

    default:
      return state;
  }
};

export default combineReducers({ loaded });
