import React from 'react';
import { Icon, Button } from 'react-portland-ui';
import listIcon from 'icons/list.svg';
import pictureIcon from 'icons/picture.svg';
import gridIcon from 'icons/grid.svg';
import locationPinIcon from 'icons/location-pin.svg';

export default () => (
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
);
