import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { get } from 'helpers/data';
import { MediumContainer, VerticalBox, Panel } from 'react-portland-ui';

export class PostsViewer extends Component {
  static propTypes = {
    post: PropTypes.object.isRequired,
    mutations: PropTypes.shape({
      deletePost: PropTypes.func.isRequired,
    }),
    actions: PropTypes.shape({
      transitionBack: PropTypes.func.isRequired,
    }),
  };

  handleDeleteFailure = errors => errors;

  handleDeleteSuccess = () => this.props.actions.transitionBack();

  handleDelete = async e => {
    e.preventDefault();

    const { errors } = await this.props.mutations.deletePost(this.props.post.node.id);

    if (errors) this.handleDeleteFailure(errors);
    else this.handleDeleteSuccess();
  };

  isLoading = () => get(this.props, 'post.loading') || !get(this.props, 'post.node');

  renderContent = () => (
    <div>
      <h2>{this.props.post.node.title}</h2>
      <p>{this.props.post.node.text}</p>
    </div>
  );

  renderHeader = () => (
    <Panel fluid>
      <Link to={`/posts/${this.props.post.node.id}/edit`}>Edit post</Link>
      <a href="#" onClick={this.handleDelete}>Delete post</a>
    </Panel>
  );

  renderLoadingState = () => (
    <div>Loading post...</div>
  );

  render() {
    const body = this.isLoading() ? this.renderLoadingState() : this.renderContent();
    const header = this.isLoading() ? false : this.renderHeader();

    return (
      <MediumContainer className="home" column>
        {header}
        <Panel fluid>
          <VerticalBox fit>
            {body}
          </VerticalBox>
        </Panel>
      </MediumContainer>
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
  deletePost: id => ({
    mutation: gql`
      mutation DeletePost($id: DeletePostInput!) {
        deletePost(input: $id) {
          deletedId
        }
      }
    `,
    variables: { id: applyClientMutationId({ id }) },
  }),
});

const mapDispatchToProps = createStructuredActions({
  transitionBack: goBack,
});

export default connect({
  mapQueriesToProps,
  mapMutationsToProps,
  mapDispatchToProps,
})(PostsViewer);
