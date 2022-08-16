import { useState, useEffect } from 'react';

const url = import.meta.env.VITE_API_ENDPOINT;

const useDataHandler = endpoint => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [baseData, setBaseData] = useState([]);
  const [searchedData, setSearchedData] = useState([]);

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
      const filterEmptyData = tempData.filter((item) => item.uuid);

      setBaseData(filterEmptyData);
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
  
  const onSearchByTitle = (term = '') => {
    if (term.length === 0) {
      setIsSearching(false);
      setSearchedData([]);
      return;
    }

    const formatTerm = term.toUpperCase();

    const cloneBaseData = [...baseData];
    const filterBySearchTerm = cloneBaseData.filter((item) => `${item?.komoditas}`.includes(formatTerm));
    setIsSearching(true);
    setSearchedData(filterBySearchTerm);
  };

  return { isLoading, isError, isSearching, data: isSearching ? searchedData : baseData, onSearchByTitle };
};

export default useDataHandler;
