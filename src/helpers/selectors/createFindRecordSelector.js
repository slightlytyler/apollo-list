import { createSelector } from 'reselect';

export default recordsByIdSelector => createSelector(
  recordsByIdSelector,
  (state, id) => id,
  (recordsById, id) => recordsById[id]
);
