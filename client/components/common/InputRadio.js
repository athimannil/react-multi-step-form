import React from 'react';

const InputRadio = ({name, label, options, onChange, checked = {}}) => {
  return (
    <div className="form-wrapper">
      <h2>{label}</h2>
      {options.map((option) => {
        return (
          <div className="form-wrapper-label" key={option.id}>
            <label>
              <input
                type="radio"
                className="form-wrapper-input form-wrapper-radio"
                name={name}
                value={option.id}
                checked={option.id == checked.answerValues}
                onChange={onChange}
              /> {option.value}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default InputRadio;
