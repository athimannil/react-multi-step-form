import React from 'react';

const SelectInput = ({name, label, options, defaultOption}) => {
  return (
    <div className="form-wrapper">
      <h2>{label}</h2>
      <div className="field">
        <select
          name={name}
          className="form-control"
        >
          <option value="">{defaultOption}</option>
          {options.map((option) => {
            return <option key={option.id} value={option.id} >{option.value}</option>;
          })}
        </select>
      </div>
    </div>
  );
};

export default SelectInput;
