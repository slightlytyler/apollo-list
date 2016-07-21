import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Controls from './Controls';
import { List as PostsList } from 'modules/posts/components';

export default () => (
  <div className="layout--feed">
    <Sidebar />
    <div className="content">
      <Header />
      <Controls />
      <PostsList />
    </div>
  </div>
);
