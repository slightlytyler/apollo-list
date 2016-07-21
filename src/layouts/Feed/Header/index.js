import React from 'react';
import { Icon, Input } from 'react-portland-ui';
import searchIcon from 'icons/search.svg';
import messageIcon from 'icons/message.svg';
import startFilledIcon from 'icons/star-filled.svg';
import profilePlaceholderImage from 'images/profile-placeholder.jpg';

export default () => (
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
);
