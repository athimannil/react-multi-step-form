import React from "react";

const InputCheckbox = ({name, label, options, onChange, checked={}}) => {
  return (
    <div className="form-wrapper">
      <h2>{label}</h2>

      {options.map(option => {
        return (
          <div className="form-wrapper-label" key={option.id}>
            <label>
              <input
                type="checkbox"
                className="form-wrapper-check"
                name={name}
                value={option.id}
                onChange={onChange}
              />{' '}
              {option.value}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default InputCheckbox;
