import md5 from 'crypto-js/md5';

const getApiUrl = () => {
  const ts = new Date().getTime();
  const apikey = process.env.MARVEL_API_KEY;
  const privateKey = process.env.MARVEL_API_PRIVATE_KEY;
  const hash = md5(`${ts}${privateKey}${apikey}`).toString();

  const url = `${process.env.MARVEL_API_URL}/characters?ts=${ts}&apikey=${apikey}&hash=${hash}`;

  return url;
};

export default getApiUrl;
