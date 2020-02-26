import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { getApiUrl } from '../../helpers/getApiUrl';

export const Home = () => {
  const url = getApiUrl();
  const { response, error, loading } = useFetch(url);

  if (loading) {
    return (<div>Loading...</div>);
  }

  const { data: { results } = {} } = response;

  console.log(results);

  return (
    <div>{JSON.stringify(results)}</div>
  );
};
