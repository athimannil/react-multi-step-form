import React from 'react';

const InputRadio = ({name, label, questionID, options}) => {
  return (
    <div className="form-wrapper">
      <h2>{label}</h2>
      {options.map((option) => {
        return (
          <div className="form-wrapper-label" key={option.id}>
            <label>
              <input
                name={name}
                type="radio"
                id={`${name}-${option.id}`}
                data-question-id={questionID}
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
