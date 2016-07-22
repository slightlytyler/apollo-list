import React, { PropTypes } from 'react';
import { Input } from 'react-portland-ui';
import NavItem from './NavItem';
import searchIcon from 'icons/search.svg';
import messageIcon from 'icons/message.svg';
import starFilledIcon from 'icons/star-filled.svg';
import profilePlaceholderImage from 'images/profile-placeholder.jpg';
import plusFilledIcon from 'icons/plus-filled.svg';

const Header = ({ actions: { pushRoute } }) => (
  <header className="header">
    <Input
      icon={searchIcon}
      placeholder="Search"
      size="large"
      fluid
      transparent
    />
    <nav className="navigation">
      <NavItem icon={messageIcon} />
      <NavItem icon={starFilledIcon} />
      <NavItem image={profilePlaceholderImage} imageAlt="profile" />
      <NavItem icon={plusFilledIcon} onClick={() => pushRoute('/posts/create')} />
    </nav>
  </header>
);

Header.propTypes = {
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
)(Header);
