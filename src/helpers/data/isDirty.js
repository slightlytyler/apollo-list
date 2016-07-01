import { isEqual, pick } from 'lodash';

export default (record, attrs) => !isEqual(pick(record, Object.keys(attrs)), attrs);
