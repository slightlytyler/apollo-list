import React, { PropTypes } from 'react';
import { Icon, Button } from 'react-portland-ui';
import logoImage from 'images/logo.svg';
import caretDownIcon from 'icons/caret-down.svg';
import locationPinIcon from 'icons/location-pin.svg';
import tagIcon from 'icons/tag.svg';
import moneyBagIcon from 'icons/money-bag.svg';
import undoIcon from 'icons/undo.svg';

const FilterSection = ({ children }) => (
  <li className="section">
    {children}
  </li>
);

FilterSection.propTypes = {
  children: PropTypes.node,
};

const FilterHeader = ({ text, svg }) => (
  <div className="header">
    <div className="icon">
      <Icon className="element" svg={svg} />
    </div>
    <div className="text">
      {text}
    </div>
    <div className="arrow">
      <Icon className="element" svg={caretDownIcon} />
    </div>
  </div>
);

FilterHeader.propTypes = {
  text: PropTypes.string.isRequired,
  svg: PropTypes.string.isRequired,
};

const FilterDropdown = ({ text, svg }) => (
  <div className="dropdown">
    <div className="icon">
      <Icon className="element" svg={svg} />
    </div>
    <div className="text">
      {text}
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

const FilterList = () => (
  <div>List</div>
);

export default () => (
  <div className="layout--feed">
    <div className="sidebar">
      <section className="header">
        <img src={logoImage} alt="home" className="logo" />
      </section>
      <ul className="filters">
        <FilterSection>
          <FilterDropdown text="DALLAS, TX" svg={locationPinIcon} />
        </FilterSection>
        <FilterSection>
          <FilterDropdown text="FOR SALE / AUTOS" svg={tagIcon} />
          <FilterList />
        </FilterSection>
        <FilterSection>
          <FilterHeader text="PRICE" svg={moneyBagIcon} />
        </FilterSection>
      </ul>
      <Button
        background="red-a"
        icon={undoIcon}
        iconJustify="center"
        rounded
        thin
      >
        Reset Search
      </Button>
    </div>
    <div className="content">
    </div>
  </div>
);
