import * as actionTypes from './actionTypes';

export default (state = {}, { type, payload }) => {
  switch (type) {
    case actionTypes.FETCH_RECORD.success:
    case actionTypes.LOGIN.success:
    case actionTypes.SIGN_UP.success:
      return Object.assign({}, state, payload);

    case actionTypes.LOGOUT.success:
      return {};

    default:
      return state;
  }
};
