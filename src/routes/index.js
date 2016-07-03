/* eslint-disable react/prop-types */
/* eslint no-unused-vars: [2, {
  "argsIgnorePattern": "dispatch|getState",
  "varsIgnorePattern": "authenticateRoute"
}] */
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import { Basic } from 'layouts';
import { Home } from 'components';
import { Login, SignUp } from 'modules/user/components';
import { Creator as PostsCreator } from 'modules/posts/components';

export default ({ dispatch, getState }) => {
  const authenticateRoute = (nextState, replace) => {
    const state = getState();

    if (!state.user.sessionId) {
      replace({ pathname: '/login' });
    }
  };

  return (
    <Route path="/" component={Basic}>
      <IndexRoute component={Home} onEnter={authenticateRoute} />
      <Route path="login" component={Login} />
      <Route path="sign-up" component={SignUp} />
      <Route path="l/:listName">
        <Route path=":categoryName" />
      </Route>
      <Route path="posts">
        <IndexRoute />
        <Route path="create" component={PostsCreator}>
          <Route path=":postId">
            <IndexRoute />
            <Route path="edit" />
          </Route>
        </Route>
      </Route>
    </Route>
  );
};
