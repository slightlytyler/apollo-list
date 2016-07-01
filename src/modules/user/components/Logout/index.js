import React, { PropTypes } from 'react';

export const UserLogout = ({ className, actions: { logout } }) => (
  <section
    className={className}
    onClick={logout}
  >
    Logout
  </section>
);

UserLogout.propTypes = {
  className: PropTypes.string,
  actions: PropTypes.shape({
    logout: PropTypes.func.isRequired,
  }),
};

import { connect } from 'react-redux';
import { createStructuredActions } from 'helpers/actions';
import { logout } from 'modules/user/actions';

export default connect(
  undefined,
  createStructuredActions({ logout })
)(UserLogout);
