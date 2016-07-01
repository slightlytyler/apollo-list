import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { Avatar, Logout } from 'modules/user/components';

export const Header = ({ visible }) => {
  const classes = classnames('page__header', 'container--outer', { visible });
  const content = visible
    ? [<Avatar key="avatar" className="user" />, <Logout key="logout" className="action" />]
    : undefined;

  return (
    <header className={classes}>
      {content}
    </header>
  );
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
