import React, { Component, PropTypes } from 'react';
import { Page, SmallContainer, Box, VerticalBox, Panel } from 'react-portland-ui';

export class Home extends Component {
  static propTypes = {
    posts: PropTypes.object.isRequired,
  };

  renderPosts = () => {
    if (this.props.posts.viewer) {
      return this.props.posts.viewer.allPosts.edges.map(node => <div>{node.title}</div>);
    }

    return false;
  }

  render() {
    return (
      <Page>
        <Box center fit>
          <SmallContainer>
            <Panel fluid>
              <VerticalBox center fit>
                {this.renderPosts()}
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
  posts: {
    query: gql`
      query {
        viewer {
          allPosts(first:10) {
            edges {
              node {
                id
                title
                body
              }
            }
          }
        }
      }
    `,
    forceFetch: false,
    returnPartialData: true,
  },
});

export default connect({
  mapQueriesToProps,
})(Home);
