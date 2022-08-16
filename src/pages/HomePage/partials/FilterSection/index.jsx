import styles from './styles.module.scss';

const FilterSection = () => {
  return (
    <section className={styles['homepage-filter-section']}>
      <div className={styles['homepage-filter-card']}>
        <p>Filter berdasarkan Area</p>
      </div>
      <div className={styles['homepage-filter-card']}>
        <p>Filter berdasarkan Ukuran</p>
      </div>
    </section>
  );
};

export default FilterSection;
