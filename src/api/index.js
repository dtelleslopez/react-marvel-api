import getApiUrl from '../helpers/getApiUrl';

export const fetchCharacters = async (name) => {
  const url = `${getApiUrl()}${name ? `&name=${name}` : ''}`;
  const response = await fetch(url);
  const json = await response.json();
  const { data: { results = [] } = {} } = json;

  return results;
};
