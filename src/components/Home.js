import React, { Component, PropTypes } from 'react';
import { Page, SmallContainer, Box, VerticalBox, Panel } from 'react-portland-ui';

export class Home extends Component {
  static propTypes = {
    posts: PropTypes.object.isRequired,
  };

  isLoading = () => this.props.posts.loading || !this.props.posts.viewer;

  isEmpty = () => !(this.props.posts.viewer || this.props.posts.viewer.allPosts.edges.length);

  renderLoadingState = () => <h1>Loading Posts...</h1>;

  renderEmptyState = () => <h1>No Posts found.</h1>;

  renderPosts = () => {
    if (this.isLoading()) return this.renderLoadingState();
    else if (this.isEmpty()) return this.renderEmptyState();

    return this.props.posts.viewer.allPosts.edges.map(({ node }) => (
      <div key={node.id}>
        <h1>{node.title}</h1>
        <p>{node.body}</p>
      </div>
    ));
  };

  render() {
    return (
      <Page>
        <Box center fit>
          <SmallContainer>
            <Panel fluid>
              <VerticalBox fit>
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
  },
});

export default connect({
  mapQueriesToProps,
})(Home);
