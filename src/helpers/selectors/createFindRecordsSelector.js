import { createSelector } from 'reselect';

export default recordsByIdSelector => createSelector(
  recordsByIdSelector,
  (state, ids) => ids,
  (recordsById, ids) => ids.map(id => recordsById[id])
);
