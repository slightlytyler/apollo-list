/* eslint-disable react/prop-types */
/* eslint no-unused-vars: [2, { "argsIgnorePattern": "dispatch|getState" }] */
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import { Page, Home } from 'components';
import { Login, SignUp } from 'modules/user/components';

export default ({ dispatch, getState }) => {
  const authenticateRoute = (nextState, replace) => {
    const state = getState();

    if (!state.user.token) {
      replace({ pathname: '/login' });
    }
  };

  return (
    <Route path="/" component={Page}>
      <IndexRoute component={Home} onEnter={authenticateRoute} />
      <Route path="login" component={Login} />
      <Route path="sign-up" component={SignUp} />
    </Route>
  );
};

