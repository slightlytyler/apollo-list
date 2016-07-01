import React, { Component } from 'react';
import { Page, SmallContainer, Box, VerticalBox, Panel } from 'react-portland-ui';

export class Home extends Component {
  render() {
    return (
      <Page>
        <Box center fit>
          <SmallContainer>
            <Panel fluid>
              <VerticalBox center fit>
                <h1>Welcome to your app!</h1>
                <p>Powered by React + Redux + Portland UI</p>
              </VerticalBox>
            </Panel>
          </SmallContainer>
        </Box>
      </Page>
    );
  }
}

import { connect } from 'react-apollo';
import gql from 'graphql-tag';

const mapQueriesToProps = () => ({
});

export default connect({
  mapQueriesToProps,
})(Home);
