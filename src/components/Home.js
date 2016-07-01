import React, { Component } from 'react';
import { Page, SmallContainer, Box, VerticalBox, Panel } from 'react-portland-ui';

export default class Home extends Component {
  render() {
    return (
      <Page>
        <Box center fit>
          <SmallContainer>
            <Panel fluid>
              <VerticalBox center fit>
                <h1>Welcome to your app!</h1>
                <p>Powered by React + Redux + Material UI</p>
              </VerticalBox>
            </Panel>
          </SmallContainer>
        </Box>
      </Page>
    );
  }
}
