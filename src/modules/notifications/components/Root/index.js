import React, { Component, PropTypes } from 'react';
import { Notifications } from 'react-portland-ui';

export class NotificationsRoot extends Component {
  static propTypes = {
    notifications: PropTypes.array.isRequired,
    actions: PropTypes.shape({
      shift: PropTypes.func.isRequired,
    }),
  };

  componentWillReceiveProps(nextProps) {
    const { notifications } = nextProps;
    if (notifications.length) this.shiftNotifications(notifications);
  }

  handleMount = ({ addNotification, removeNotification }) => {
    this.addNotification = addNotification;
    this.removeNotification = removeNotification;

    const { notifications } = this.props;

    if (notifications.length) this.shiftNotifications(notifications);
  };

  shiftNotifications = notifications => notifications.forEach(notification => {
    this.addNotification(notification);
    this.props.actions.shift(notification.uid);
  });

  render() {
    return (
      <Notifications onMount={this.handleMount} />
    );
  }
}

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { createStructuredActions } from 'helpers/actions';
import { getSubstate } from 'modules/notifications/selectors';
import { shift } from 'modules/notifications/actions';

export default connect(
  createStructuredSelector({ notifications: getSubstate }),
  createStructuredActions({ shift })
)(NotificationsRoot);
