import React, { PropTypes } from 'react';
import messageIcon from 'icons/message.svg';
import starFilledIcon from 'icons/star-filled.svg';
import profilePlaceholderImage from 'images/profile-placeholder.jpg';
import plusFilledIcon from 'icons/plus-filled.svg';
import Item from './Item';

export const UserNav = ({ actions: { pushRoute } }) => (
  <nav className="nav__user">
    <Item icon={messageIcon} />
    <Item icon={starFilledIcon} />
    <Item image={profilePlaceholderImage} imageAlt="profile" />
    <Item icon={plusFilledIcon} onClick={() => pushRoute('/posts/create')} />
  </nav>
);

UserNav.propTypes = {
  actions: PropTypes.shape({
    pushRoute: PropTypes.func.isRequired,
  }),
};

import { connect } from 'react-redux';
import { createStructuredActions } from 'helpers/actions';
import { pushRoute } from 'modules/router/actions';

export default connect(
  undefined,
  createStructuredActions({ pushRoute })
)(UserNav);
