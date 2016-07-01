import React, { Component, PropTypes } from 'react';
import { Router } from 'react-router';
import { Root as NotificationsRoot } from 'modules/notifications';

export class RootContent extends Component {
  static propTypes = {
    routes: PropTypes.element.isRequired,
    history: PropTypes.object.isRequired,
    storageLoaded: PropTypes.bool.isRequired,
  };

  render() {
    if (this.props.storageLoaded) {
      return (
        <div>
          <Router history={this.props.history}>
            {this.props.routes}
          </Router>
          <NotificationsRoot />
        </div>
      );
    }

    return false;
  }
}

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectors as storageSelectors } from 'modules/storage';

export default connect(
  createStructuredSelector({ storageLoaded: storageSelectors.isLoaded })
)(RootContent);
