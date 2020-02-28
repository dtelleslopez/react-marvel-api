import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Main } from '../../layout/main';
import { SearchBar } from '../../components/searchBar';
import { List } from '../../components/list';
import { ListItem } from '../../components/listItem';

import { Search } from './styles';

export const Home = ({ characters, isLoading, fetchCharacters }) => {
  useEffect(() => {
    fetchCharacters();
  }, []);

  const handleOnSubmit = (name) => {
    fetchCharacters(name);
  };

  return (
    <Main>
      <Search>
        <h3>Search your character</h3>
        <SearchBar placeholder="Name of character" onSubmit={handleOnSubmit} />
      </Search>
      <List loading={isLoading}>
        {characters.map(({ id, ...item }) => (
          <ListItem key={id} {...item} />
        ))}
      </List>
    </Main>
  );
};

Home.propTypes = {
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
  isLoading: PropTypes.bool.isRequired,
  fetchCharacters: PropTypes.func.isRequired,
};
