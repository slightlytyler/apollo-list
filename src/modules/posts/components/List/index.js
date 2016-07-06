import React, { Component, PropTypes } from 'react';
import { get } from 'helpers/data';
import Item from '../Item';

export class PostsList extends Component {
  static propTypes = {
    posts: PropTypes.object.isRequired,
  };

  isLoading = () => get(this.props, 'posts.loading') || !get(this.props, 'posts.session');

  isEmpty = () => get(this.props, 'posts.session.currentUser.localFeed.edges', []).length === 0;

  renderLoadingState = () => <h1>Loading Posts...</h1>;

  renderEmptyState = () => <h1>No Posts found.</h1>;

  renderItems = () => this.props.posts.session.currentUser.localFeed.edges.map(({ node }) => (
    <Item
      key={node.id}
      id={node.id}
      title={node.title}
      text={node.text}
      postedAt={node.createdAt}
      authorName={node.author.fullName}
      currentUserIsAuthor={this.props.posts.session.currentUser.id === node.author.id}
    />
  ));

  render() {
    if (this.isLoading()) return this.renderLoadingState();
    if (this.isEmpty()) return this.renderEmptyState();

    return (
      <div className="posts__list">
        {this.renderItems()}
      </div>
    );
  }
}

import { connect } from 'react-apollo';
import gql from 'graphql-tag';

const mapQueriesToProps = () => ({
  posts: {
    query: gql`
      query LocalFeed {
        session {
          currentUser {
            id
            localFeed {
              edges {
                node {
                  id
                  title
                  text
                  createdAt
                  author {
                    id
                    fullName
                  }
                }
              }
            }
          }
        }
      }
    `,
    pollInterval: 1000,
  },
});

export default connect({
  mapQueriesToProps,
})(PostsList);
