import { useState } from 'react';

import Search from '@components/Search';
import styles from './styles.module.scss';

const ItemListSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const onChangeSearchText = (event) => {
    const { value } = event.target;
    event.preventDefault();

    setSearchTerm(value);
  };
  
  return (
    <section className={styles['itemlist-section']}>
      <Search onChange={onChangeSearchText} searchTerm={searchTerm} />
      <div>
        {searchTerm}
      </div>
      <div>
        item list
      </div>
    </section>
  );
};

export default ItemListSection;
