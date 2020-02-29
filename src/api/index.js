import getApiUrl from '../helpers/getApiUrl';

export const fetchCharacters = async ({ name, pagination } = {}) => {
  const url = `${getApiUrl()}${name ? `&name=${name}` : ''}${pagination ? `&limit=${pagination.limit}&offset=${pagination.page * pagination.limit}` : ''}`;
  const response = await fetch(url);
  const json = await response.json();
  const { data: { total = 0, results: characters = [] } = {} } = json;

  return {
    total,
    characters,
  };
};
