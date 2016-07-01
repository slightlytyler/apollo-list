// Action types come in two flavors, single value assigned to a const
// and sets ('PENDING', 'SUCCESS', 'FAILURe') assigned to an object
// This function takes @actionTypes and returns an array of the
// atomic action types
export default actionTypes => Object.values(actionTypes).reduce(
  (result, actionType) => (
    typeof actionType === 'object'
      ? [...result, ...Object.values(actionType)]
      : [...result, actionType]
  ),
  []
);
