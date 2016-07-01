import { defaultMemoize as memoize } from 'reselect';

export default (findCollectionSelector, findCurrentCollectionSelector) => memoize(
  (state, query) => {
    const collection = query
      ? findCollectionSelector(state, query)
      : findCurrentCollectionSelector(state);

    return !!collection && collection.loading;
  }
);
