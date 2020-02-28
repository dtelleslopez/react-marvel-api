const getThumbnailUrl = (array = []) => {
  if (!Array.isArray(array) || typeof array !== 'object') {
    return '';
  }

  const { url } = array.find(({ type }) => type === 'detail') || {};

  if (url && typeof url === 'string') {
    return url;
  }

  return '';
};

export default getThumbnailUrl;
