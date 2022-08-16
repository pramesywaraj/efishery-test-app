import { checkClassName } from '@helpers/style';
import styles from './styles.module.scss';

const TextInput = ({
  containerClassName,
  labelClassName,
  inputClassName,
  name,
  label,
  required = false,
  placeholder,
  type,
  value,
  onChange,
  onKeyDown
}) => {
  const containerClasses = checkClassName(styles['text-input-container'], containerClassName);
  const labelClasses = checkClassName(styles['text-input-label'], labelClassName);
  const inputClasses = checkClassName(styles['text-input-area'], inputClassName);

  return (
    <div className={containerClasses}>
      {label && (
        <label className={labelClasses} htmlFor={name}>
          {label}
        </label>
      )}
      <input
        className={inputClasses}
        id={name}
        name={name}
        type={type || 'text'}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e)}
        onKeyDown={e => onKeyDown(e)}
      />
    </div>
  );
};

export default TextInput;
