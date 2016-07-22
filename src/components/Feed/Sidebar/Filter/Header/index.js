import React, { PropTypes } from 'react';
import { Icon } from 'react-portland-ui';

const FilterHeader = ({ text, svg }) => (
  <div className="header">
    <div className="icon">
      <Icon className="element" svg={svg} />
    </div>
    <div className="text">
      <span>{text}</span>
    </div>
  </div>
);

FilterHeader.propTypes = {
  text: PropTypes.string.isRequired,
  svg: PropTypes.string.isRequired,
};

export default FilterHeader;
