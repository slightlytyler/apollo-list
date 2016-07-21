import React, { PropTypes } from 'react';
import { Icon } from 'react-portland-ui';
import caretDownIcon from 'icons/caret-down.svg';

const FilterDropdown = ({ text, svg }) => (
  <div className="dropdown">
    <div className="icon">
      <Icon className="element" svg={svg} />
    </div>
    <div className="text">
      <span>{text}</span>
    </div>
    <div className="arrow">
      <Icon className="element" svg={caretDownIcon} />
    </div>
  </div>
);

FilterDropdown.propTypes = {
  text: PropTypes.string.isRequired,
  svg: PropTypes.string.isRequired,
};

export default FilterDropdown;
