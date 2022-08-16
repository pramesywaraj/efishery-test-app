import { useState, useEffect } from 'react';

const url = import.meta.env.VITE_API_ENDPOINT;

const useFetch = (endpoint) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState([]);

  const fetchingData = async () => {
    setIsLoading(true);
    if (isError) setIsError(false);
    
    const requestConfig = {
      method: 'GET',
      headers: new Headers({ 'Content-Type': 'application/json' })
    };

    try {
      const response = await fetch(url + endpoint, requestConfig);
      if (!response || response.status !== 200 || !response.ok) throw new Error('Something Wrong');

      const tempData = await response.json();
      
      setData(tempData);
    } catch (e) {
      console.error('There is something wrong when fetching the data', e);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  
  useEffect(() => {
    fetchingData();
  }, []);
  
  return { isLoading, isError, data };
};

export default useFetch;
