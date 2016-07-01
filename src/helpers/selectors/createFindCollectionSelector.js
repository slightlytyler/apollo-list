import { createSelector } from 'reselect';
import { isEqual } from 'lodash';

export default collectionsSelector => createSelector(
  collectionsSelector,
  (state, query) => query,
  (collections, query) => collections.find(c => isEqual(c.query, query))
);
