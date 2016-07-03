export default (obj, key, defaultValue) => {
  const value = key.split('.').reduce((o, x) => (
    (typeof o === 'undefined' || o === null) ? o : o[x]
  ), obj);

  return value || defaultValue;
};
