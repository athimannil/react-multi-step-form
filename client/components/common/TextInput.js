import React from 'react';

const TextInput = ({type, name, label, placeholder, onChange, value={} }) => {
  return (
    <div className="form-wrapper">
      <h2>{label}</h2>
      <input
        type={type}
        className="form-wrapper-text"
        name={name}
        placeholder={placeholder}
        value={value.answerValues || ''}
        onChange={onChange}
      />
    </div>
  );
};

export default TextInput;
