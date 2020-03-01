import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Main } from '../../layout/main';
import { SearchBar } from '../../components/searchBar';
import { List } from '../../components/list';

import { Search } from './styles';

export const Home = ({
  isLoading, pagination, characters, fetchCharacters, fetchMoreCharacters,
}) => {
  const [filter, setFilter] = useState('');

  useEffect(() => {
    fetchCharacters();
  }, []);

  const handleOnSubmit = (name) => {
    fetchCharacters({ name });
    setFilter(name);
  };

  return (
    <Main>
      <Search>
        <h3>Search your character</h3>
        <SearchBar placeholder="Name of character" onSubmit={handleOnSubmit} />
      </Search>
      <List
        filter={filter}
        items={characters}
        total={pagination.total}
        loading={isLoading}
        loadMoreItems={() => fetchMoreCharacters({ pagination })}
      />
    </Main>
  );
};

Home.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  pagination: PropTypes.shape({
    page: PropTypes.number.isRequired,
    limit: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
  }).isRequired,
  characters: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    thumbnail: PropTypes.shape({
      path: PropTypes.string,
      extension: PropTypes.string,
    }),
    urls: PropTypes.arrayOf(PropTypes.shape({
      type: PropTypes.string,
      url: PropTypes.string,
    })),
  })).isRequired,
  fetchCharacters: PropTypes.func.isRequired,
  fetchMoreCharacters: PropTypes.func.isRequired,
};
