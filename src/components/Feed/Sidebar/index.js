import React from 'react';
import { Button } from 'react-portland-ui';
import {
  Dropdown as FilterDropdown,
  Header as FilterHeader,
  List as FilterList,
  Section as FilterSection,
} from './Filter';
import { Logo } from 'components/nav';
import locationPinIcon from 'icons/location-pin.svg';
import tagIcon from 'icons/tag.svg';
import moneyBagIcon from 'icons/money-bag.svg';
import undoIcon from 'icons/undo.svg';

export default () => (
  <div className="sidebar">
    <section className="header">
      <Logo />
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
);
