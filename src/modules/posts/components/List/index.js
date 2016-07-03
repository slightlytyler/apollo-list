import React, { Component, PropTypes } from 'react';
import Item from '../Item';

export class PostsList extends Component {
  static propTypes = {
    posts: PropTypes.object.isRequired,
  };

  isLoading = () => {
    try {
      return this.props.posts.loading || !this.props.posts.session;
    } catch (e) {
      return false;
    }
  };

  isEmpty = () => {
    try {
      return this.props.posts.session.currentUser.localFeed.edges.length === 0;
    } catch (e) {
      return true;
    }
  }

  renderLoadingState = () => <h1>Loading Posts...</h1>;

  renderEmptyState = () => <h1>No Posts found.</h1>;

  render() {
    if (this.isLoading()) return this.renderLoadingState();
    else if (this.isEmpty()) return this.renderEmptyState();

    return this.props.posts.session.currentUser.localFeed.edges.map(({ node }) => (
      <Item id={node.id} title={node.title} body={node.body} />
    ));
  }
}

import { connect } from 'react-apollo';
import gql from 'graphql-tag';

const mapQueriesToProps = () => ({
  posts: {
    query: gql`
      query LocalFeed {
        session {
          id
          currentUser {
            localFeed {
              edges {
                node {
                  id
                  title
                  text
                }
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
})(PostsList);
