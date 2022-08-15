export const checkClassName = (defaultClassName, additionalClassName) => {
  let tempClasses = defaultClassName;
  if (additionalClassName) tempClasses = defaultClassName.concat(' ', additionalClassName.toString());
  
  return tempClasses;
};