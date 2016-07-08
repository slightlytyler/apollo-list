import React, { Component, PropTypes } from 'react';
import Form from '../Form';

export class PostsEditor extends Component {
  static propTypes = {
    post: PropTypes.shape({
      loading: PropTypes.bool,
      errors: PropTypes.object,
      node: PropTypes.shape({
        title: PropTypes.string,
        text: PropTypes.text,
      }),
    }).isRequired,
    mutations: PropTypes.shape({
      update: PropTypes.func.isRequired,
    }),
    actions: PropTypes.shape({
      transitionBack: PropTypes.func.isRequired,
    }),
  };

  handleUpdateFailure = errors => errors;

  handleUpdateSuccess = () => this.props.actions.transitionBack();

  handleValidSubmit = async post => {
    const { errors } = await this.props.mutations.update(post);

    if (errors) this.handleUpdateFailure(errors);
    else this.handleUpdateSuccess();
  };

  render() {
    if (this.props.post.loading) return <div>Loading...</div>;

    return (
      <Form
        post={this.props.post.node}
        onSubmit={this.handleValidSubmit}
      />
    );
  }
}

import { connect } from 'react-apollo';
import gql from 'graphql-tag';
import { applyClientMutationId } from 'helpers/mutations';
import { createStructuredActions } from 'helpers/actions';
import { goBack } from 'modules/router/actions';

const mapQueriesToProps = ({ ownProps }) => ({
  post: {
    query: gql`
      query($id: ID!) {
        node(id: $id) {
          ... on Post {
              id
              title
              text
          }
        }
      }
    `,
    variables: { id: ownProps.params.postId },
  },
});

const mapMutationsToProps = () => ({
  update: post => ({
    mutation: gql`
      mutation UpdatePost($post: UpdatePostInput!) {
        updatePost(input: $post) {
          changedPost {
            id
            title
            text
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
})(PostsEditor);
