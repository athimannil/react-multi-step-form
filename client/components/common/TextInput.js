import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({name, label, placeholder}) => {
  return (
    <div className="form-wrapper">
      <h2>{label}</h2>
      <div className="field">
        <input
          type="text"
          className="form-wrapper-text"
          name={name}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default TextInput;
