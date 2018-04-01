import React from 'react';

const SelectInput = ({name, label, options, defaultOption, onChange, checked = {} }) => {
  return (
    <div className="form-wrapper">
      <h2>{label}</h2>
      <select
        name={name}
        value={checked.answerValues}
        onChange={onChange}
        className="form-wrapper-input form-wrapper-select"
      >
        <option value="">{defaultOption}</option>
        {options.map((option) => {
          return <option key={option.id} value={option.id} >{option.value}</option>;
        })}
      </select>
    </div>
  );
};

export default SelectInput;
