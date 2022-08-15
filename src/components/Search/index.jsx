import { useEffect } from 'react';

import { TextInput } from '@components/Inputs';
import { IconButton } from '@components/Buttons';

import { ReactComponent as IconSearch } from '@assets/images/icons/icon-search.svg';

import styles from './styles.module.scss';

const Search = ({ onChange, onSubmit, searchTerm }) => {
  useEffect(() => {
    const keyDownListener = event => {
      if (event.key === 'Enter') {
        event.preventDefault();
        onSubmit();
      }
    }
   
    document.addEventListener('keydown', keyDownListener);

    return () => {
      document.removeEventListener('keydown', keyDownListener);
    }
  }, []);

  return (
    <div className={styles['search-container']}>
      <TextInput
        name="search"
        placeholder="Cari produk disini..."
        onChange={onChange}
        value={searchTerm}
        containerClassName={styles['search-input-container']}
      />
      <IconButton
        onClick={onSubmit}
        alt="Pencarian"
        className={styles['search-submit-button']}
        iconClassName={styles['search-submit-button-icon']}
        Icon={IconSearch}
      />
    </div>
  );
};

export default Search;
