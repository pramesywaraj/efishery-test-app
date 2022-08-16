import useDataHandler from '@/hooks/useDataHandler';

import ItemListSection from '@pages/HomePage/partials/ItemListSection';
import FilterSection from '@pages/HomePage/partials/FilterSection';

import styles from './styles.module.scss';

const HomePage = () => {
  const { isLoading, data, onSearchByTitle } = useDataHandler('/list');

  return (
    <main className={styles['homepage-main']}>
      <header>
        <h2>Daftar Produk Perikanan</h2>
      </header>
      <section className={styles['homepage-section-container']}>
        <FilterSection />
        <ItemListSection isLoading={isLoading} products={data} onSearchByTitle={onSearchByTitle} />
      </section>
    </main>
  );
};

export default HomePage;
