import { CardBase } from '@components/Cards';

import { ReactComponent as IconLocation } from '@assets/images/icons/icon-location.svg';
import { ReactComponent as IconWeight } from '@assets/images/icons/icon-weight.svg';

import styles from './styles.module.scss';

const GridProductItem = () => {
  return (
    <CardBase className={styles['item-product_grid-container']}>
      <p className={styles['item-product-title']}>Bawal Ikan Kakap Asik SeIndonesia</p>
      <div className={styles['item-product_detail-section']}>
        <IconLocation className={styles['item-icon']}/>
        <p className={styles['item-detail-text']}>Ambarawa</p>
      </div>
      <div className={styles['item-product_detail-section']}>
        <IconWeight className={styles['item-icon']}/>
        <p className={styles['item-detail-text']}>250 Kg tersedia</p>
      </div>
      <div className={styles['item-product_detail-section']}>
        <p className={styles['item-rp-text']}>Rp</p>
        <p className={styles['item-detail-text']}>25000/kg</p>
      </div>
    </CardBase>
  )
}

export default GridProductItem;
