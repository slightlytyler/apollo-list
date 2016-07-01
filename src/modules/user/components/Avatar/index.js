import React, { PropTypes } from 'react';

export const UserAvatar = ({ className, name }) => (
  <section className={className}>Hello, {name}</section>
);

UserAvatar.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
};

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getName } from 'modules/user/selectors';

export default connect(
  createStructuredSelector({ name: getName })
)(UserAvatar);
