import { checkClassName } from '@helpers/style';
import styles from './styles.module.scss';

const FloatingButton = ({ onClick, className, children }) => {
  const buttonClasses = checkClassName(styles['floating-btn'], className);
  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default FloatingButton;
