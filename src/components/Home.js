import React from 'react';
import { Link } from 'react-router';
import { MediumContainer, VerticalBox, Panel } from 'react-portland-ui';
import { List as PostsList } from 'modules/posts/components';

export default () => (
  <MediumContainer className="home" column>
    <Panel fluid>
      <Link to="/posts/create">Create a post</Link>
    </Panel>
    <Panel fluid>
      <VerticalBox fit>
        <PostsList />
      </VerticalBox>
    </Panel>
  </MediumContainer>
);
