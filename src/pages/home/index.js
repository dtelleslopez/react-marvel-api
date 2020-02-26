import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { getApiUrl } from '../../helpers/getApiUrl';
import { Main } from '../../layout/main';
import { SearchBar } from '../../components/searchBar';
import { List } from '../../components/list';
import { ListItem } from '../../components/listItem';

import { Search } from './styles';

export const Home = () => {
  const url = getApiUrl();
  const { response, error, loading } = useFetch(url);

  if (loading) {
    return (<div>Loading...</div>);
  }

  const { data: { results = [] } = {} } = response;

  console.log(results);

  return (
    <Main>
      <Search>
        <h3>Search your character</h3>
        <SearchBar placeholder="Name of character" />
      </Search>
      <List>
        {results.map(({ id, ...item }) => (
          <ListItem key={id} {...item} />
        ))}
      </List>
    </Main>
  );
};
