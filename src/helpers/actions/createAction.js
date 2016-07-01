import { curry } from 'lodash';

const defaultPayloadSelector = payload => payload;

export default curry((actionTypes, key, payloadSelector = defaultPayloadSelector) => args => ({
  type: actionTypes[key],
  payload: payloadSelector(args),
}));
