import React from 'react';

const TextAreaInput = ({name, label, placeholder}) => {
  return (
    <div className="form-wrapper">
      <h2>{label}</h2>
      <textarea
        name={name}
        className="form-wrapper-textarea"
        placeholder={placeholder}
        rows="4"
      />
    </div>
  );
};

export default TextAreaInput;
