import { useState, useEffect } from 'react';
import useDataHandler from '@hooks/useDataHandler';
import useFetch from '@hooks/useFetch';

import ItemListSection from '@pages/HomePage/partials/ItemListSection';
import FilterSection from '@pages/HomePage/partials/FilterSection';

import styles from './styles.module.scss';

const HomePage = () => {
  const { isLoading, data, onSearchByTitle } = useDataHandler('/list');
  const { isLoading: isSizeFiltersLoading, data: dataSizeFilters } = useFetch('/option_size');
  const { isLoading: isAreaFiltersLoading, data: dataAreaFilters } = useFetch('/option_area');
  
  const [sizeOptions, setSizeOptions] = useState(dataSizeFilters);
  const [areaOptions, setAreaOptions] = useState(dataAreaFilters);
  const [processedData, setProcessedData] = useState(data);
  const [areaSelected, setAreaSelected] = useState(null);
  const [sizeSelected, setSizeSelected] = useState(null);
  
  useEffect(() => {
    if (dataSizeFilters.length > 0) setSizeOptions(dataSizeFilters);
  }, [dataSizeFilters]);
  
  useEffect(() => {
    if (dataAreaFilters.length > 0) setAreaOptions(dataAreaFilters);
  }, [dataAreaFilters]);
  
  useEffect(() => {
    setProcessedData(data);
  }, [data]);
  
  const onChangeOptionArea = (e) => {
    const selectedValue = e.target.value;
    let clonedData = [...processedData];
    
    if (selectedValue !== areaSelected) {
      clonedData = [...data];

      if (selectedValue === 'NONE') {
        setProcessedData(data);
        setAreaSelected(null);
        return;
      };
    }

    const filteredData = clonedData.filter((item) => item.area_kota === selectedValue.toUpperCase());
    
    setAreaSelected(e.target.value);
    setProcessedData(filteredData);
  }
  
  const onChangeOptionSize = (e) => {
    const selectedValue = e.target.value;
    let clonedData = [...processedData];
    
    if (selectedValue !== sizeSelected) {
      clonedData = [...data];

      if (selectedValue === 'NONE') {
        setProcessedData(data);
        setSizeSelected(null);
        return;
      };
    }


    const filteredData = clonedData.filter((item) => item.size === selectedValue);
    
    setSizeSelected(e.target.value);
    setProcessedData(filteredData);
  }

  return (
    <main className={styles['homepage-main']}>
      <header>
        <h2>Daftar Produk Perikanan</h2>
      </header>
      <section className={styles['homepage-section-container']}>
        <FilterSection
          className={styles['filter-desktop']}
          sizeSelected={sizeSelected}
          sizeOptions={sizeOptions}
          isLoadingSize={isSizeFiltersLoading}
          areaSelected={areaSelected}
          areaOptions={areaOptions}
          isLoadingArea={isAreaFiltersLoading}
          onChangeOptionArea={onChangeOptionArea}
          onChangeOptionSize={onChangeOptionSize}
        />
        <ItemListSection
          isLoading={isLoading}
          products={processedData}
          onSearchByTitle={onSearchByTitle}
          filter={
            <FilterSection
              className={styles['filter-mobile']}
              sizeSelected={sizeSelected}
              sizeOptions={sizeOptions}
              isLoadingSize={isSizeFiltersLoading}
              areaSelected={areaSelected}
              areaOptions={areaOptions}
              isLoadingArea={isAreaFiltersLoading}
              onChangeOptionArea={onChangeOptionArea}
              onChangeOptionSize={onChangeOptionSize}
            />
          }
        />
      </section>
    </main>
  );
};

export default HomePage;
