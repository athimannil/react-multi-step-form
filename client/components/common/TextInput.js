import React from 'react';

const TextInput = ({name, label, placeholder}) => {
  return (
    <div className="form-wrapper">
      <h2>{label}</h2>
      <input
        type="text"
        className="form-wrapper-text"
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextInput;
