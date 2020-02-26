import { useState, useEffect } from 'react';

export const useFetch = (url, options = {}) => {
  const [response, setResponse] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await fetch(url, options);
        const json = await res.json();

        setResponse(json);
        setLoading(false);
      } catch (err) {
        setError(err);
      }
    };

    fetchData();
  }, []);

  return { response, error, loading };
};
