import { defaultMemoize as memoize } from 'reselect';

export default (findCollection, getCurrentQuery) => memoize(
  state => findCollection(state, getCurrentQuery(state))
);
