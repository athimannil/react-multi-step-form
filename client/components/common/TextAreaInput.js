import React from 'react';

const TextAreaInput = ({name, label, placeholder, onChange, value={}}) => {
  return (
    <div className="form-wrapper">
      <h2>{label}</h2>
      <textarea
        name={name}
        className="form-wrapper-input form-wrapper-textarea"
        rows="4"
        placeholder={placeholder}
        value={value.answerValues}
        onChange={onChange}
      />
    </div>
  );
};

export default TextAreaInput;
