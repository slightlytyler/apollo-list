import React from 'react';
import { LargeContainer, VerticalBox, Panel } from 'react-portland-ui';
import { List as ListsList } from 'modules/lists/components';

export default () => (
  <LargeContainer className="home" column>
    <Panel fluid>
      <VerticalBox fit>
        <ListsList />
      </VerticalBox>
    </Panel>
  </LargeContainer>
);
