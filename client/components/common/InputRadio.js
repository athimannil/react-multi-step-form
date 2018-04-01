import React from 'react';

const InputRadio = ({name, label, options}) => {
  return (
    <div className="form-wrapper">
      <h2>{label}</h2>
      {options.map((option) => {
        return (
          <div className="form-wrapper-label" key={option.id}>
            <label>
              <input
                type="radio"
                name={name}
                value={option.id}
              /> {option.value}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default InputRadio;
