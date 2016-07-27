import React from 'react';
import { Input } from 'react-portland-ui';
import { User as UserNav } from 'components/nav';
import searchIcon from 'icons/search.svg';

export default () => (
  <header className="header">
    <Input
      icon={searchIcon}
      placeholder="Search"
      size="large"
      fluid
      transparent
    />
    <UserNav />
  </header>
);
