import getApiUrl from '../helpers/getApiUrl';

export const fetchCharacters = async ({ name, page } = {}) => {
  const limit = 20;
  const url = `${getApiUrl()}${name ? `&name=${name}` : ''}${page ? `&limit=${limit}&offset=${page * limit}` : ''}`;
  console.log(url);
  const response = await fetch(url);
  const json = await response.json();
  const { data: { results = [] } = {} } = json;

  return results;
};
