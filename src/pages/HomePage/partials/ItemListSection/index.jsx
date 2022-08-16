import { useState } from 'react';

import Search from '@components/Search';
import { GridProductItem } from '@components/Items';
import LayoutSwitch from '@components/Screens/HomePage/LayoutSwitch';

import { PRODUCT_ITEMS_LAYOUT_GRID } from '@constants/product';

import styles from './styles.module.scss';

const ItemListSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [itemsLayout, setItemsLayout] = useState(PRODUCT_ITEMS_LAYOUT_GRID);
  
  const onChangeSearchText = (event) => {
    const { value } = event.target;
    event.preventDefault();

    setSearchTerm(value);
  };
  
  const onSubmitSearch = () => {
    // handle search here based on search term
  };
  
  const onChangeLayout = (selectedLayout) => {
    setItemsLayout(selectedLayout);
  };
  
  return (
    <section className={styles['itemlist-section']}>
      <Search onChange={onChangeSearchText} searchTerm={searchTerm} onSubmit={onSubmitSearch} />
      <div className={styles['itemlist-subheader-container']}>
        <p className={styles['text-result']}>Menampilkan 300 hasil</p>
        <LayoutSwitch onChangeLayout={onChangeLayout} renderedLayout={itemsLayout} />
      </div>
      <div className={`${styles['itemlist-container']} ${itemsLayout === PRODUCT_ITEMS_LAYOUT_GRID ? styles['grid-view'] : styles['list-view']}`}>
        <GridProductItem />
        <GridProductItem />
      </div>
    </section>
  );
};

export default ItemListSection;
