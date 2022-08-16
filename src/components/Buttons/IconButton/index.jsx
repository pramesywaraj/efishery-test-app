import { checkClassName } from '@helpers/style';
import styles from './styles.module.scss';

const IconButton = ({ onClick, className, iconClassName, Icon }) => {
  const buttonClasses = checkClassName(styles['icon-btn'], className);
  const iconClasses = checkClassName(styles['icon-image'], iconClassName);
  return (
    <button className={buttonClasses} onClick={onClick}>
      <Icon className={iconClasses} />
    </button>
  );
};

export default IconButton;
