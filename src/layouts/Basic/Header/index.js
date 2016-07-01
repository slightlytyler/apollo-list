import React, { PropTypes } from 'react';
import { LargeContainer } from 'react-portland-ui';
import { Avatar, Logout } from 'modules/user/components';

export const Header = ({ visible }) => {
  if (visible) {
    return (
      <LargeContainer className="header">
        <Avatar key="avatar" className="user" />
        <Logout key="logout" className="action" />
      </LargeContainer>
    );
  }

  return false;
};

Header.propTypes = {
  visible: PropTypes.bool.isRequired,
};

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectors as userSelectors } from 'modules/user';

export default connect(
  createStructuredSelector({ visible: userSelectors.isAuthenticated })
)(Header);
