export const checkClassName = (defaultClassName, additionalClassName) => {
  let tempClasses = defaultClassName;
  if (additionalClassName)
    tempClasses = defaultClassName.concat(' ', additionalClassName.toString());

  return tempClasses;
};

export const formatStringToPascal = (string = '') => {
  return string.toLowerCase().replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
};

export const formatCurrency = (string = '') => {
  return new Intl.NumberFormat('id-ID', { compactDisplay: 'short' }).format(string);
};
