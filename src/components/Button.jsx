import React from 'react';
import '../styles/Button.css';

const Button = ({ children, onClick, variant = 'primary', type }) => {
  return (
    <button
      className={`neo-button neo-button--${variant}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
