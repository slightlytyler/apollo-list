import React, { Component, PropTypes } from 'react';

export class ListsList extends Component {
  static propTypes = {
    lists: PropTypes.object.isRequired,
  };

  renderLoadingState = () => 'Loading...';

  renderLists = () => {
    if (!this.props.lists.loading) {
      return this.props.lists.node.lists.edges.map(edge => edge.name);
    }

    return this.renderLoadingState();
  }

  render() {
    return (
      <div>
        {this.renderLists()}
      </div>
    );
  }
}

import { connect } from 'react-apollo';
import gql from 'graphql-tag';

const mapQueriesToProps = () => ({
  lists: {
    query: gql`
      query($locationId: ID!) {
        node(id: $locationId) {
          ... on Location{
            lists {
              edges {
                Lists:node {
                  id
                  name
                }
              }
            }
          }
        }
      }
    `,
    variables: { locationId: 'Location:542dc5c6-cd04-40b3-ab9d-f6fadb33a396' },
  },
});

export default connect({
  mapQueriesToProps,
})(ListsList);
