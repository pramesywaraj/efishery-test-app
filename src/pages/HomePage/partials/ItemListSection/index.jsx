import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Search from '@components/Search';
import { GridProductItem } from '@components/Items';
import LayoutSwitch from '@components/Screens/HomePage/LayoutSwitch';
import { FloatingButton } from '@components/Buttons';
import { LoadingPlaceholder } from '@components/Loaders';

import useDataHandler from '@/hooks/useDataHandler';

import { PRODUCT_ITEMS_LAYOUT_GRID } from '@constants/product';
import { ReactComponent as IconAdd } from '@assets/images/icons/icon-add.svg';

import styles from './styles.module.scss';

const DUMMY_LOADING_ARRAY = [1, 2, 3, 4, 5, 6, 7, 8];

const ItemListSection = () => {
  const { isLoading, data } = useDataHandler('/list');

  const [searchTerm, setSearchTerm] = useState('');
  const [itemsLayout, setItemsLayout] = useState(PRODUCT_ITEMS_LAYOUT_GRID);

  const navigation = useNavigate();

  const onChangeSearchText = event => {
    const { value } = event.target;
    event.preventDefault();

    setSearchTerm(value);
  };

  const onSubmitSearch = () => {
    // handle search here based on search term
  };

  const onChangeLayout = selectedLayout => {
    setItemsLayout(selectedLayout);
  };

  const redirectToInputPage = () => {
    navigation('/input-item');
  };

  return (
    <section className={styles['itemlist-section']}>
      <Search onChange={onChangeSearchText} searchTerm={searchTerm} onSubmit={onSubmitSearch} />
      <div className={styles['itemlist-subheader-container']}>
        <p className={styles['text-result']}>{`Menampilkan ${data.length} hasil`}</p>
        <LayoutSwitch onChangeLayout={onChangeLayout} renderedLayout={itemsLayout} />
      </div>
      <div
        className={`${styles['itemlist-container']} ${
          itemsLayout === PRODUCT_ITEMS_LAYOUT_GRID ? styles['grid-view'] : styles['list-view']
        }`}
      >
        {(!isLoading || data.length !== 0 ? data : DUMMY_LOADING_ARRAY).map(item => {
          if (isLoading)
            return (
              <div className={styles['itemlist-loader']}>
                <LoadingPlaceholder
                  containerClassName={styles['loader']}
                  style={{ height: '100%' }}
                />
              </div>
            );
          return (
            <GridProductItem
              name={item.komoditas}
              city={item.area_kota}
              province={item.area_provinsi}
              price={item.price}
              size={item.size}
            />
          );
        })}
      </div>

      <FloatingButton className={styles['floating-add-button']} onClick={redirectToInputPage}>
        <IconAdd />
      </FloatingButton>
    </section>
  );
};

export default ItemListSection;
