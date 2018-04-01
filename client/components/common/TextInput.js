import React from 'react';

const TextInput = ({type, name, label, placeholder}) => {
  return (
    <div className="form-wrapper">
      <h2>{label}</h2>
      <input
        type={type}
        className="form-wrapper-text"
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextInput;
