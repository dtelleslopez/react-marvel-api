import React from 'react';
import PropTypes from 'prop-types';
import { SearchIcon } from '../../assets/searchIcon';

import { Form, Input, Button } from './styles';

export const SearchBar = ({ placeholder, onSubmit }) => {
  const handleOnSubmit = (event) => {
    event.preventDefault();

    const search = event.target.elements.search.value;

    onSubmit(search);
  };

  return (
    <Form onSubmit={handleOnSubmit}>
      <Input name="search" placeholder={placeholder} />
      <Button type="submit">
        <SearchIcon />
      </Button>
    </Form>
  );
};

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  onSubmit: PropTypes.func,
};

SearchBar.defaultProps = {
  placeholder: undefined,
  onSubmit: () => undefined,
};
