import React, { Component, PropTypes } from 'react';
import Form from '../Form';

export class PostsCreator extends Component {
  static propTypes = {
    mutations: PropTypes.shape({
      createPost: PropTypes.func.isRequired,
    }),
    actions: PropTypes.shape({
      transitionBack: PropTypes.func.isRequired,
    }),
  };

  handleCreatePostFailure = errors => errors;

  handleCreatePostSuccess = () => this.props.actions.transitionBack();

  handleValidSubmit = async post => {
    const { errors } = await this.props.mutations.createPost(post);

    if (errors) this.handleCreatePostFailure(errors);
    else this.handleCreatePostSuccess();
  };

  render() {
    return (
      <Form onSubmit={this.handleValidSubmit} />
    );
  }
}

import { connect } from 'react-apollo';
import gql from 'graphql-tag';
import { applyClientMutationId } from 'helpers/mutations';
import { createStructuredActions } from 'helpers/actions';
import { goBack } from 'modules/router/actions';

const mapMutationsToProps = () => ({
  createPost: post => ({
    mutation: gql`
      mutation CreatePost($post: CreatePostInput!) {
        createPost(input: $post) {
          changePost {
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
  mapMutationsToProps,
  mapDispatchToProps,
})(PostsCreator);
