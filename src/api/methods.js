import { zipObject } from 'lodash';

const methods = [
  'createRecord',
  'updateRecord',
  'replaceRecord',
  'deleteRecord',
  'fetchRecord',
  'fetchCollection',
];

export default methods;

export const shape = zipObject(methods, new Array(methods.length).fill({}));
