import { zipObject, map } from 'lodash';

export default records => zipObject(map(records, record => record.id), records);
