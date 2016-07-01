import { push } from 'react-router-redux';
import path from 'path';
import { getQuery, getPathname } from './selectors';

export const pushRoute = push;

export const pushRelativeRoute = route => (dispatch, getState) => dispatch(
  push(
    typeof route === 'string'
      ? path.join(getPathname(getState()), route)
      : Object.assign({}, route, {
        pathname: path.join(getPathname(getState()), route.pathname),
      })
  )
);

export const pushPath = pathname => (dispatch, getState) => dispatch(
  push({
    pathname,
    query: getQuery(getState()),
  })
);

export const pushRelativePath = pathname => (dispatch, getState) => dispatch(
  push({
    pathname: path.join(getPathname(getState()), pathname),
    query: getQuery(getState()),
  })
);

export const pushQuery = query => (dispatch, getState) => dispatch(
  push({
    pathname: getPathname(getState()),
    query,
  })
);
