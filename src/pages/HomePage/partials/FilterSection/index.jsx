import { useMemo } from 'react';
import { SelectOption } from '@components/Inputs';
import { LoadingPlaceholder } from '@components/Loaders';
import { formatStringToPascal } from '@helpers/style';
import styles from './styles.module.scss';

const FilterSection = ({ areaSelected, sizeSelected, sizeOptions, areaOptions, isLoadingSize, isLoadingArea, onChangeOptionArea, onChangeOptionSize, className }) => {
  const parsedAreaOptions = useMemo(() => {
    if (!areaOptions || areaOptions.length === 0) return [];
    const tempOptions = [...areaOptions];
    let mappedOptions = tempOptions.map((item) => {
      return {
        value: item.city,
        label: formatStringToPascal(item.city)
      }
    });
    mappedOptions.unshift({ value: 'NONE', label: 'Pilih area...' });

    return mappedOptions;
  }, [areaOptions]);

  const parsedSizeOptions = useMemo(() => {
    if (!sizeOptions || sizeOptions.length === 0) return [];

    const tempOptions = [...sizeOptions];
    let mappedOptions = tempOptions.map((item) => {
      return {
        value: item.size,
        label: item.size
      }
    });
    
    mappedOptions.unshift({ value: 'NONE', label: 'Pilih ukuran...' });
    
    return mappedOptions;
  }, [sizeOptions]);

  return (
    <section className={`${styles['homepage-filter-section']} ${className}`}>
      <div className={styles['homepage-filter-card']}>
        <p>Filter berdasarkan Area</p>
        {!isLoadingSize ? <SelectOption selectedValue={areaSelected} options={parsedAreaOptions} onChange={onChangeOptionArea} /> : (
          <LoadingPlaceholder />
        )}
      </div>
      <div className={styles['homepage-filter-card']}>
        <p>Filter berdasarkan Ukuran</p>
        {!isLoadingArea ? <SelectOption selectedValue={sizeSelected}  options={parsedSizeOptions} onChange={onChangeOptionSize} /> : (
          <LoadingPlaceholder />
        )}
      </div>
    </section>
  );
};

export default FilterSection;
