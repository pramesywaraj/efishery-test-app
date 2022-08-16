import { checkClassName } from '@helpers/style';
import styles from './styles.module.scss';

const CardBase = ({ children, className }) => {
  const cardBaseClasses = checkClassName(styles['card-base-container'], className);
  return (
    <div className={cardBaseClasses}>
      {children}
    </div>
  )
}

export default CardBase;
