import { curry } from 'lodash';

export default curry((NAME, type) => `${NAME}/${type}`);
