import React from 'react';
import { SearchIcon } from '../../assets/searchIcon';

import { Search, Input, Button } from './styles';

export const SearchBar = ({ placeholder }) => (
  <Search>
    <Input placeholder={placeholder} />
    <Button>
      <SearchIcon />
    </Button>
  </Search>
);
