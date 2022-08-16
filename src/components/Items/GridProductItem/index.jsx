import { formatStringToPascal, formatCurrency } from '@helpers/style';
import { CardBase } from '@components/Cards';

import { ReactComponent as IconLocation } from '@assets/images/icons/icon-location.svg';
import { ReactComponent as IconWeight } from '@assets/images/icons/icon-weight.svg';

import styles from './styles.module.scss';

const GridProductItem = ({ city, province, name, price, size }) => {
  const comodityName = formatStringToPascal(name);
  const cityName = formatStringToPascal(city);
  const provinceName = formatStringToPascal(province);
  const productPrice = formatCurrency(price);

  return (
    <CardBase className={styles['item-product_grid-container']}>
      <p className={styles['item-product-title']}>{comodityName}</p>
      <div className={styles['item-product_detail-section']}>
        <IconLocation className={styles['item-icon']} />
        <p className={styles['item-detail-text']}>{`${cityName}, ${provinceName}`}</p>
      </div>
      <div className={styles['item-product_detail-section']}>
        <IconWeight className={styles['item-icon']} />
        <p className={styles['item-detail-text']}>{`${size} Kg tersedia`}</p>
      </div>
      <div className={styles['item-product_detail-section']}>
        <p className={styles['item-rp-text']}>Rp</p>
        <p className={styles['item-detail-text']}>{`${productPrice}/kg`}</p>
      </div>
    </CardBase>
  );
};

export default GridProductItem;
