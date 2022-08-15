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
}) => {
  let containerClasses = styles['text-input-container'];
  if (containerClassName) containerClasses = containerClasses.concat(' ', containerClassName.toString());
  
  let labelClasses = styles['text-input-label'];
  if (labelClassName) labelClasses = labelClasses.concat(' ', labelClassName.toString());
  
  let inputClasses = styles['text-input-area'];
  if (inputClassName) inputClasses = inputClasses.concat(' ', inputClassName.toString());

  return (
    <div className={styles['text-input-container']}>
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
      />
    </div>
  );
}

export default TextInput;
