import { createSelector } from 'reselect';

export default recordsByIdSelector => createSelector(
  recordsByIdSelector,
  recordsById => Object.keys(recordsById)
);
