import { reduce } from 'lodash';

// Takes set of modules and the atom key i.e. hooks
// Returns an array of all the module atoms i.e. all the hooks
export default (modules, key) => reduce(
  modules,
  (result, m) => {
    const value = m[key];

    if (value) {
      if (typeof value === 'object') {
        return [...result, ...Object.values(value)];
      }

      return [...result, value];
    }

    return result;
  },
  []
);
