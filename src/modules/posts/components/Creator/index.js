import React, { Component, PropTypes } from 'react';
import { omit } from 'lodash';
import Form from '../Form';

export class PostsCreator extends Component {
  static propTypes = {
    lists: PropTypes.object.isRequired,
    mutations: PropTypes.shape({
      createPost: PropTypes.func.isRequired,
    }),
    actions: PropTypes.shape({
      transitionBack: PropTypes.func.isRequired,
    }),
  };

  state = {};

  getCategories = () => this.state.categories;

  getLists = () => this.props.lists.node.lists.edges.map(edge => edge.list);

  handleCreatePostFailure = errors => errors;

  handleCreatePostSuccess = () => this.props.actions.transitionBack();

  handleChange = ({ listId }) => {
    const { currentListId } = this.state;
    if (listId && (listId !== currentListId)) {
      this.setState({
        currentListId: listId,
        categories: this.getLists()
          .find(list => list.id === listId)
          .categories
          .edges
          .map(edge => edge.category),
      });
    }
  };

  handleValidSubmit = async post => {
    const input = omit(post, 'listId');
    const { errors } = await this.props.mutations.createPost(input);

    if (errors) this.handleCreatePostFailure(errors);
    else this.handleCreatePostSuccess();
  };

  render() {
    if (this.props.lists.loading) {
      return <div>Loading</div>;
    }

    return (
      <Form
        onChange={this.handleChange}
        onSubmit={this.handleValidSubmit}
        lists={this.getLists()}
        categories={this.getCategories()}
      />
    );
  }
}

import { connect } from 'react-apollo';
import gql from 'graphql-tag';
import { applyClientMutationId } from 'helpers/mutations';
import { createStructuredActions } from 'helpers/actions';
import { goBack } from 'modules/router/actions';

const mapQueriesToProps = () => ({
  lists: {
    query: gql`
      query($locationId: ID!) {
        node(id: $locationId) {
          ... on Location{
            lists {
              edges {
                list:node {
                  id
                  name
                  categories {
                    edges {
                      category:node {
                        id
                        name
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `,
    variables: { locationId: 'Location:931c8366-c1f9-4126-8169-9a580d9b3e85' },
  },
});

const mapMutationsToProps = () => ({
  createPost: post => ({
    mutation: gql`
      mutation CreatePost($post: CreatePostInput!) {
        createPost(input: $post) {
          changedPost {
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
    `,
    variables: { post: applyClientMutationId(post) },
  }),
});

const mapDispatchToProps = createStructuredActions({
  transitionBack: goBack,
});

export default connect({
  mapQueriesToProps,
  mapMutationsToProps,
  mapDispatchToProps,
})(PostsCreator);
