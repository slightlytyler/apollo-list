import React, { PropTypes } from 'react';
import { Icon, CheckboxGroup, Badge } from 'react-portland-ui';
import plusOutlineIcon from 'icons/plus-outline.svg';

const Label = ({ option }) => (
  <div className="filter__list__label">
    <span className="label">
      {option.label}
    </span>
    <Badge text="124" />
  </div>
);

Label.propTypes = {
  option: PropTypes.shape({
    label: PropTypes.string,
  }),
};

export default () => (
  <div className="filter__list">
    <CheckboxGroup
      className="checkboxes"
      name="baseFilters"
      options={[
        { value: 'cars', label: 'Cars' },
        { value: 'trucks', label: 'Trucks' },
        { value: 'parts', label: 'Parts' },
      ]}
      labelGetter={Label}
      vertical
    />
    <div className="show-more">
      <Icon className="icon" svg={plusOutlineIcon} />
      <span className="text">Show 36 more</span>
    </div>
  </div>
);
