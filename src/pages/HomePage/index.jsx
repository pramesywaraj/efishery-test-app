import ItemListSection from '@pages/HomePage/partials/ItemListSection';
import FilterSection from '@pages/HomePage/partials/FilterSection';

import styles from './styles.module.scss';

const HomePage = () => {
  return (
    <main className={styles['homepage-main']}>
      <header>
        <h2>Daftar Produk Perikanan</h2>
      </header>
      <section className={styles['homepage-section-container']}>
        <FilterSection />
        <ItemListSection />
      </section>
    </main>
  );
};

export default HomePage;
