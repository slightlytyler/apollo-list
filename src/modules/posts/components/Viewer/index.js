import React, { Component, PropTypes } from 'react';
import { get } from 'helpers/data';
import { MediumContainer, VerticalBox, Panel } from 'react-portland-ui';

export class PostsViewer extends Component {
  static propTypes = {
    post: PropTypes.object.isRequired,
  };

  isLoading = () => get(this.props, 'post.loading') || !get(this.props, 'post.node');

  renderContent = () => (
    <div>
      <h2>{this.props.post.node.title}</h2>
      <p>{this.props.post.node.text}</p>
    </div>
  );

  renderLoadingState = () => (
    <div>Loading post...</div>
  );

  render() {
    const body = this.isLoading() ? this.renderLoadingState() : this.renderContent();

    return (
      <MediumContainer className="home" column>
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

export default connect({
  mapQueriesToProps,
})(PostsViewer);
