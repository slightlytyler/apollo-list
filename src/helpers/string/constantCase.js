import { snakeCase, toUpper } from 'lodash';

export default str => toUpper(snakeCase(str));
