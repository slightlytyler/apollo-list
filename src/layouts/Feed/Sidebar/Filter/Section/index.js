import React, { PropTypes } from 'react';

const FilterSection = ({ children }) => (
  <li className="section">
    {children}
  </li>
);

FilterSection.propTypes = {
  children: PropTypes.node,
};

export default FilterSection;
