import { reduce } from 'lodash';

// Takes set of modules and the config key i.e. persist
// Returns an array of all the values i.e. all the hooks
export default (modules, key, byName = false) => {
  if (byName) {
    return reduce(
      modules,
      (result, m) => (
        m.config[key]
          ? { ...result, [m.NAME]: Object.values(m.config[key]) }
          : result
        ),
      {}
    );
  }

  return reduce(
    modules,
    (result, m) => (m.config[key] ? [...result, ...Object.values(m.config[key])] : result),
    []
  );
};
