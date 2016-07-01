import { useRouterHistory } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux';
import NAME from './NAME';

const basename = __BASENAME__;
const browserHistory = useRouterHistory(createBrowserHistory)({ basename });

export const middleware = routerMiddleware(browserHistory);

export const createHistory = store => syncHistoryWithStore(
  browserHistory,
  store,
  { selectLocationState: (state) => state[NAME] }
);
