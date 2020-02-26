import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { getApiUrl } from '../../helpers/getApiUrl';

export const Home = () => {
  const url = getApiUrl();
  const response = useFetch(url);

  return (
    <div>{JSON.stringify(response)}</div>
  );
};
