const SelectOption = ({ options, selectedValue, onChange }) => {
  return (
    <select value={selectedValue} onChange={onChange}>
      {options.map(({ value, label }) => <option value={value}>{label}</option>)}
    </select>
  );
};

export default SelectOption;