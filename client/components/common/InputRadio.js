import React from 'react';

const InputRadio = ({name, questionID, options}) => {
  return (
    <div className="form-wrapper">
      {options.map((option) => {
        return (
          <label className="form-wrapper-label" key={option.id}>
            <input
              name={name}
              type="radio"
              id={`${name}-${option.id}`}
              data-question-id={questionID}
              value={option.id}
            /> {option.value}
          </label>
        );
      })}
    </div>
  );
};

export default InputRadio;
