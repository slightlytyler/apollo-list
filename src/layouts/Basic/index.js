import React, { PropTypes } from 'react';
import { VerticalBox } from 'react-portland-ui';
import Header from './Header';

const Basic = ({ children }) => (
  <VerticalBox className="layout--basic">
    <Header />
    <div className="content">
      {children}
    </div>
  </VerticalBox>
);

Basic.propTypes = {
  children: PropTypes.node,
};

export default Basic;
