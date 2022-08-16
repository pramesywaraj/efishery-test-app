import { IconButton } from '@components/Buttons';

import { ReactComponent as IconGrid } from '@assets/images/icons/icon-grid.svg';
import { ReactComponent as IconList } from '@assets/images/icons/icon-list.svg';
import { PRODUCT_ITEMS_LAYOUT_GRID, PRODUCT_ITEMS_LAYOUT_LIST } from '@constants/product';

import styles from './styles.module.scss';

const LayoutSwitch = ({ onChangeLayout, renderedLayout }) => {
  return (
    <div className={styles['itemlist-subheader-switch']}>
      <IconButton
        onClick={() => onChangeLayout(PRODUCT_ITEMS_LAYOUT_GRID)}
        alt="Grid"
        className={`${styles['itemlist-switch-button']} ${
          renderedLayout === PRODUCT_ITEMS_LAYOUT_GRID && styles['active']
        }`}
        iconClassName={styles['icon']}
        Icon={IconGrid}
      />
      <IconButton
        onClick={() => onChangeLayout(PRODUCT_ITEMS_LAYOUT_LIST)}
        alt="List"
        className={`${styles['itemlist-switch-button']} ${
          renderedLayout === PRODUCT_ITEMS_LAYOUT_LIST && styles['active']
        }`}
        iconClassName={styles['icon']}
        Icon={IconList}
      />
    </div>
  );
};

export default LayoutSwitch;
