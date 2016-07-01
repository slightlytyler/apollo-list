import { reduce, pickBy } from 'lodash';

// Takes set of @modules and returns the keys for the modules
// who's @configKey is truthy`
export default (modules, configKey) => {
  const configuredModules = reduce(
    modules,
    (result, module, key) => (module.config ? { ...result, [key]: module } : result),
    {}
  );
  const truthyModules = Object.keys(pickBy(configuredModules, module => module.config[configKey]));

  return truthyModules;
};
