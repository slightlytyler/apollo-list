/* eslint-disable react/prop-types */
/* eslint no-unused-vars: [2, {
  "argsIgnorePattern": "dispatch|getState",
  "varsIgnorePattern": "authenticateRoute"
}] */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import authenticateRoute from './authenticateRoute';

import { Basic } from 'layouts';
import { Root as Home } from './home';
import { Login, SignUp } from 'modules/user/components';
import {
  Creator as PostsCreator,
  Editor as PostsEditor,
  Viewer as PostsViewer,
} from 'modules/posts/components';

export default ({ dispatch, getState }) => {
  const authenticate = authenticateRoute(getState);

  return (
    <Route path="/" component={Basic}>
      <IndexRoute component={Home} onEnter={authenticate} />
      <Route path="login" component={Login} />
      <Route path="sign-up" component={SignUp} />
      <Route path="l/:listName">
        <IndexRoute />
        <Route path=":categoryName" />
      </Route>
      <Route path="posts">
        <IndexRoute />
        <Route path="create" component={PostsCreator} />
        <Route path=":postId">
          <IndexRoute component={PostsViewer} />
          <Route path="edit" component={PostsEditor} />
        </Route>
      </Route>
    </Route>
  );
};
