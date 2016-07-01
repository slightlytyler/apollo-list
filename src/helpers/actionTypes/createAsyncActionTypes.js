import { curry, zipObject } from 'lodash';

const statuses = ['pending', 'success', 'failure'];

export default curry((NAME, type) => zipObject(
  statuses,
  statuses.map(status => `${NAME}/${type}/${status}`)
));
