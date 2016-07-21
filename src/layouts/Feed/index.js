import React, { PropTypes } from 'react';
import { Icon, CheckboxGroup, Badge, Input, Button } from 'react-portland-ui';
import { List as PostsList } from 'modules/posts/components';
import logoImage from 'images/logo.svg';
import caretDownIcon from 'icons/caret-down.svg';
import locationPinIcon from 'icons/location-pin.svg';
import tagIcon from 'icons/tag.svg';
import plusOutlineIcon from 'icons/plus-outline.svg';
import moneyBagIcon from 'icons/money-bag.svg';
import undoIcon from 'icons/undo.svg';
import searchIcon from 'icons/search.svg';
import messageIcon from 'icons/message.svg';
import startFilledIcon from 'icons/star-filled.svg';
import profilePlaceholderImage from 'images/profile-placeholder.jpg';
import listIcon from 'icons/list.svg';
import pictureIcon from 'icons/picture.svg';
import gridIcon from 'icons/grid.svg';

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
      <span>{text}</span>
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

const FilterListItemLabel = ({ option }) => (
  <div className="filter__list__item__label">
    <span className="label">
      {option.label}
    </span>
    <Badge text="124" />
  </div>
);

FilterListItemLabel.propTypes = {
  option: PropTypes.shape({
    label: PropTypes.string,
  }),
};

const FilterList = () => (
  <div className="filter__list">
    <CheckboxGroup
      className="checkboxes"
      name="baseFilters"
      options={[
        { value: 'cars', label: 'Cars' },
        { value: 'trucks', label: 'Trucks' },
        { value: 'parts', label: 'Parts' },
      ]}
      labelGetter={FilterListItemLabel}
      vertical
    />
    <div className="show-more">
      <Icon className="icon" svg={plusOutlineIcon} />
      <span className="text">Show 36 more</span>
    </div>
  </div>
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
      <div className="reset">
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
    </div>
    <div className="content">
      <header className="header">
        <Input
          icon={searchIcon}
          placeholder="Search"
          size="large"
          fluid
          transparent
        />
        <nav className="navigation">
          <section className="item">
            <Icon className="icon" svg={messageIcon} />
          </section>
          <section className="item">
            <Icon className="icon" svg={startFilledIcon} />
          </section>
          <section className="item">
            <img alt="profile" className="image" src={profilePlaceholderImage} />
          </section>
        </nav>
      </header>
      <div className="controls">
        <section className="feedback">
          Showing <span className="bold">476</span> results for
          &nbsp;<span className="bold">"Tesla"</span>
        </section>
        <ul className="view-options">
          <li className="item active">
            <div className="text">List</div>
            <div className="icon">
              <Icon className="element" svg={listIcon} />
            </div>
          </li>
          <li className="item">
            <div className="text">Thumb</div>
            <div className="icon">
              <Icon className="element" svg={pictureIcon} />
            </div>
          </li>
          <li className="item">
            <div className="text">Gallery</div>
            <div className="icon">
              <Icon className="element" svg={gridIcon} />
            </div>
          </li>
          <li className="item">
            <div className="text">Map</div>
            <div className="icon">
              <Icon className="element" svg={locationPinIcon} />
            </div>
          </li>
        </ul>
        <Button
          className="order-dropdown"
          ghost
          rounded
          thin
        >
          Relevance
        </Button>
      </div>
      <PostsList />
    </div>
  </div>
);
