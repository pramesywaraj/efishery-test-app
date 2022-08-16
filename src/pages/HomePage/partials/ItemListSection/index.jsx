import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Search from '@components/Search';
import { GridProductItem } from '@components/Items';
import LayoutSwitch from '@components/Screens/HomePage/LayoutSwitch';
import { FloatingButton } from '@components/Buttons';

import { PRODUCT_ITEMS_LAYOUT_GRID } from '@constants/product';
import { ReactComponent as IconAdd } from '@assets/images/icons/icon-add.svg';

import styles from './styles.module.scss';

const ItemListSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [itemsLayout, setItemsLayout] = useState(PRODUCT_ITEMS_LAYOUT_GRID);
  
  const navigation = useNavigate();
  
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
  
  const redirectToInputPage = () => {
    navigation('/input-item');
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
      </div>
      
      <FloatingButton className={styles['floating-add-button']} onClick={redirectToInputPage}>
        <IconAdd />
      </FloatingButton>
    </section>
  );
};

export default ItemListSection;
