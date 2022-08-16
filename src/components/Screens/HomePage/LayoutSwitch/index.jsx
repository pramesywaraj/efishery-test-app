import { IconButton } from '@components/Buttons';

import { ReactComponent as IconGrid } from '@assets/images/icons/icon-grid.svg';
import { ReactComponent as IconList } from '@assets/images/icons/icon-list.svg';

import styles from './styles.module.scss';

const LayoutSwitch = () => {
  return (
    <div className={styles['itemlist-subheader-switch']}>
      <IconButton
        onClick={() => {}}
        alt="Grid"
        className={`${styles['itemlist-switch-button']} ${styles['active']}`}
        iconClassName={styles['icon']}
        Icon={IconGrid}
      />
      <IconButton
        onClick={() => {}}
        alt="List"
        className={`${styles['itemlist-switch-button']}`}
        iconClassName={styles['icon']}
        Icon={IconList}
      />
    </div>
  );
};

export default LayoutSwitch;
