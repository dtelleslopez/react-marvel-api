import React, { useEffect } from 'react';
import { Main } from '../../layout/main';
import { SearchBar } from '../../components/searchBar';
import { List } from '../../components/list';
import { ListItem } from '../../components/listItem';

import { Search } from './styles';

export const Home = ({ characters, isLoading, fetchCharacters }) => {
  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <Main>
      <Search>
        <h3>Search your character</h3>
        <SearchBar placeholder="Name of character" />
      </Search>
      <List loading={isLoading}>
        {characters.map(({ id, ...item }) => (
          <ListItem key={id} {...item} />
        ))}
      </List>
    </Main>
  );
};
