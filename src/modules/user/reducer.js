import * as actionTypes from './actionTypes';

export default (state = {}, { type, payload }) => {
  switch (type) {
    case actionTypes.LOGIN:
    case actionTypes.SIGN_UP:
      return Object.assign({}, state, payload);

    case actionTypes.LOGOUT:
      return {};

    default:
      return state;
  }
};
