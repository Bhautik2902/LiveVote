import React from 'react';
import '../styles/TextEntry.css';

const TextEntry = ({ label, name, type = 'text', value, onChange, placeholder, required = false }) => {
  return (
    <div className="input">
      <label htmlFor={name} className="input__label">
        {label}
        {required && <span className="input__required">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        className="input__field"
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default TextEntry;